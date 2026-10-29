import {WORLDS} from '../curriculum.mjs';
const freeOnly=process.argv.includes('--free-only');
const rows=new Map();
const add=(kind,text)=>{if(!text)return;const key=kind+'|'+text;rows.set(key,{kind,text});};
for(const world of WORLDS){if(freeOnly&&!world.free)continue;for(const l of world.lessons){for(const w of l.words){add('word',w.word);for(const part of w.parts)if(part.length>1&&part!=='-')add('segment',part);}if(l.text)add('story',l.text);
 if(l.mode==='letter'||l.mode==='oral')add('segment',l.focus);
}}
console.log(JSON.stringify([...rows.values()]));
