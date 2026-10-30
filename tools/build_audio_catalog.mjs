import {WORLDS} from '../curriculum.mjs';
const freeOnly=process.argv.includes('--free-only');
const rows=new Map();
const add=(kind,text)=>{if(!text)return;const key=kind+'|'+text;rows.set(key,{kind,text});};
for(const world of WORLDS){if(freeOnly&&!world.free)continue;for(const l of world.lessons){for(const w of l.words){add('word',w.word);for(const part of w.parts)if(part.length>1&&part!=='-')add('segment',part);}if(l.text)add('story',l.text);
 if(l.mode==='letter'||l.mode==='oral')add('segment',l.focus);
}}

// Original BunyiBaca graded reader: include full written word and sentence audio
// as experimental offline placeholders pending native phonics quality review.
const {BOOKS}=await import('../reading-series.mjs');
for(const b of BOOKS){
 for(const p of b.pages){
  for(const ph of p.sounds||[])if(ph.length>1||'aiueo'.includes(ph))add('segment',ph);
  for(const item of p.blends||[]){add('word',item.outcome);for(const part of item.parts)if(part.length>1)add('segment',part);}
  for(const w of p.words||[]){add('word',w.label);for(const part of w.parts)if(part.length>1)add('segment',part);}
  for(const line of p.lines||[])add('story',line);
  if(p.kind==='story')add('story',p.lines.join(' '));
  if(p.kind==='sentence')for(const line of p.lines)add('story',line);
 }
}

console.log(JSON.stringify([...rows.values()]));