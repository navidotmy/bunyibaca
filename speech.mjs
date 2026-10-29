import {AUDIO_FILES} from './audio-manifest.mjs';
/* Speech engine: curated local clips first, then an installed ms-MY Web Speech voice.
   NOTE: TTS phonemes can be inaccurate; no automated evaluation of child speech. */
let available=[];
let utterance=null;
const suffix=(text)=>{const norm=String(text).toLowerCase().normalize('NFC');const clean=norm.replace(/[^\p{L}\p{N}]/gu,'_');if(clean.length<=80)return clean;let h=2166136261;for(let i=0;i<norm.length;i++)h=Math.imul(h^norm.charCodeAt(i),16777619)>>>0;return clean.slice(0,48)+'_'+h.toString(16);};
export function voices(){if(!('speechSynthesis' in window))return [];available=speechSynthesis.getVoices().filter(v=>/^(ms|may)(-|$)/i.test(v.lang)||/malay|bahasa melayu/i.test(v.name));return available;}
export function hasMalayVoice(){return voices().length>0;}
export function stopSpeech(){if('speechSynthesis' in window)speechSynthesis.cancel();if(utterance)utterance=null;if(window.__bunyibacaAudio){window.__bunyibacaAudio.pause();window.__bunyibacaAudio=null;}}
const manifest=new Set(AUDIO_FILES); // Synthetic demo clips are unreviewed; replace after expert review.
export async function speak(text,{rate=.86,voiceName='',sound=true,kind='word'}={}){
 if(!sound||!text)return false;
 stopSpeech();
 const key=`${kind}/${suffix(text)}.mp3`;
 if(manifest.has(key)){
  try {const a=new Audio(`./assets/audio/${key}`);window.__bunyibacaAudio=a;return await new Promise(resolve=>{a.onended=()=>resolve(true);a.onerror=()=>resolve(false);a.play().catch(()=>resolve(false));});}catch{}
 }
 if(kind==='segment' && /^[bcdfghjklmnpqrstvwxyz]$/i.test(text))return false; // avoid false letter-name-as-phoneme teaching
 if(!('speechSynthesis' in window))return false;
 const malay=voices();if(!malay.length)return false;
 return new Promise(resolve=>{
  const u=new SpeechSynthesisUtterance(String(text));
  u.lang='ms-MY';u.voice=malay.find(v=>v.name===voiceName)||malay[0];u.rate=Math.max(.6,Math.min(1.1,Number(rate)||.86));u.pitch=1;u.volume=1;
  u.onend=()=>resolve(true);u.onerror=()=>resolve(false);utterance=u;
  speechSynthesis.cancel();speechSynthesis.speak(u);
  setTimeout(()=>resolve(false),Math.max(2500,String(text).length*300));
 });
}
export async function blend(parts,settings){if(!settings.sound)return false;let good=true;
 for(const part of parts){const ok=await speak(part,{...settings,kind:'segment',rate:.72});good=good&&ok;await new Promise(r=>setTimeout(r,250));}
 const ok=await speak(parts.join(''),{...settings,kind:'word',rate:.9});return good&&ok;}
