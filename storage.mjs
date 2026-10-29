export const STORAGE_KEY='bunyibaca:v1';
const defaultSettings = {theme:'light',accent:'mint',fontScale:1,rate:0.86,voiceName:'',sound:true,reduceMotion:false};
export const freshState=()=>({version:1,profiles:[],activeId:null,settings:{...defaultSettings},entitlement:{tier:'free'},events:[],assignments:{},parentPinHash:null});
export const uid=()=>typeof crypto!=='undefined' && crypto.randomUUID ? crypto.randomUUID() : 'id-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
export function loadState(){try{const raw=localStorage.getItem(STORAGE_KEY);if(!raw)return freshState();const p=JSON.parse(raw);if(p.version!==1||!Array.isArray(p.profiles))throw Error('Invalid schema');return {...freshState(),...p,settings:{...defaultSettings,...p.settings},entitlement:{tier:'free'}};}catch(e){return freshState();}}
let current=loadState();
export function getState(){return current;}
export function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(current));}
export function mutate(fn){fn(current);save();return current;}
export function addChild(name,age=5){const child={id:uid(),name:String(name).trim().slice(0,32),age:Number(age)||5,createdAt:Date.now(),progress:{}};mutate(s=>{s.profiles.push(child);s.activeId=child.id;});return child;}
export function getChild(){return current.profiles.find(p=>p.id===current.activeId)||current.profiles[0]||null;}
export function setChild(id){mutate(s=>{if(s.profiles.some(p=>p.id===id))s.activeId=id;});}
export function profileResult(lessonId,correct,total,elapsed){let p=getChild();if(!p)return;let now=Date.now();mutate(s=>{
 p=s.profiles.find(x=>x.id===p.id);
 const prev=p.progress[lessonId]||{attempts:0,passes:0,best:0};
 const pct=total?Math.round(100*correct/total):0;
 const pass=total>0 && pct>=80;
 const passes=prev.passes+(pass?1:0);
 const mastery=passes>=2;
 const stage=mastery?Math.min((prev.stage||0)+1,4):0;
 const nextReview=now+(mastery?Math.pow(2,stage)*86400000:86400000);
 p.progress[lessonId]={attempts:prev.attempts+1,passes,best:Math.max(prev.best,pct),lastPct:pct,mastery,lastPlayed:now,nextReview,stage};
 s.events.unshift({id:uid(),profileId:p.id,lessonId,correct,total,percent:pct,elapsed,at:now});
 s.events=s.events.slice(0,1200);
});}
export function exportData(){const data={...current,entitlement:{tier:'free'},parentPinHash:null};return JSON.stringify({format:'BunyiBacaBackup',exportedAt:new Date().toISOString(),data},null,2);}
export function importData(raw){const obj=JSON.parse(raw);if(obj.format!=='BunyiBacaBackup'||obj.data?.version!==1||!Array.isArray(obj.data.profiles))throw Error('Fail tidak sah.');
 const safe=obj.data;
 for(const profile of safe.profiles){if(typeof profile.id!=='string'||typeof profile.name!=='string'||typeof profile.progress!=='object'||profile.progress===null)throw Error('Rekod profil tidak sah.');profile.name=profile.name.slice(0,32);}
 current={...freshState(),profiles:safe.profiles.slice(0,100),activeId:safe.activeId,settings:{...defaultSettings,...safe.settings},events:Array.isArray(safe.events)?safe.events.slice(0,1200):[],assignments:safe.assignments||{}};
 save();return current;}
export async function hashPin(pin){const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('bunyibaca-parent-pin:v1:'+pin));return Array.from(new Uint8Array(buf)).map(n=>n.toString(16).padStart(2,'0')).join('');}
export function progressTotals(p){const values=Object.values(p?.progress||{});return {mastered:values.filter(v=>v.mastery).length,started:values.length,attempts:values.reduce((a,v)=>a+v.attempts,0)};}
