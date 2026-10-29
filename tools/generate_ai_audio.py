#!/usr/bin/env python3
"""Optional AI voice pack builder. Requires external OPENAI_API_KEY; no key is in this repo.
Never run this without reviewing pricing and clips. 2026 legacy speech endpoint retires 2027-01-06.
Example:
  OPENAI_API_KEY=... python3 tools/generate_ai_audio.py --free-only --limit 10 --dry-run
  OPENAI_API_KEY=... python3 tools/generate_ai_audio.py --free-only --limit 10
Each output is unreviewed; replace fallback demo only after QA approval.
"""
from pathlib import Path
import argparse,json,subprocess,os,urllib.request,urllib.error,unicodedata,time
p=argparse.ArgumentParser()
p.add_argument('--free-only',action='store_true',help='Restrict to first 32 lessons')
p.add_argument('--limit',type=int,default=5,help='Upper bound on potentially billable calls')
p.add_argument('--dry-run',action='store_true',help='Show plan, do not call service')
p.add_argument('--model',default='gpt-4o-mini-tts',help='Legacy Speech API model; see deprecation note')
p.add_argument('--voice',default='marin')
p.add_argument('--out',default='ai-review',help='Place results into separate QA folder, not directly into public app')
a=p.parse_args()
base=Path(__file__).resolve().parent.parent
entries=json.loads(subprocess.check_output(['node','tools/build_audio_catalog.mjs']+(['--free-only'] if a.free_only else []),cwd=base))
entries=[r for r in entries if not(r['kind']=='segment' and len(r['text'])==1 and r['text'].lower() not in 'aiueo')]
entries=entries[:a.limit]
print('AI audio generation plan:',len(entries),'items,',a.model,'voice',a.voice)
if a.dry_run:
 for e in entries:print(e['kind'],repr(e['text'][:120]))
 raise SystemExit(0)
key=os.environ.get('OPENAI_API_KEY')
if not key:raise SystemExit('Set OPENAI_API_KEY in your private build environment; never commit it.')
out=base/a.out
out.mkdir(parents=True,exist_ok=True)
for i,item in enumerate(entries,1):
 kind,text=item['kind'],item['text']
 payload={
  'model':a.model,'voice':a.voice,'input':text,'response_format':'mp3',
  'instructions':'Speak only in standard Malaysian Bahasa Melayu, warmly and clearly for primary school literacy practice. Accurate vowels, stress, digraphs, and no English letter names or added vowel after consonants. Do not add words or sound effects.'
 }
 req=urllib.request.Request('https://api.openai.com/v1/audio/speech',data=json.dumps(payload).encode(),headers={'Authorization':'Bearer '+key,'Content-Type':'application/json'},method='POST')
 try:
  with urllib.request.urlopen(req,timeout=90) as response:audio=response.read()
 except urllib.error.HTTPError as err:raise SystemExit('TTS error '+str(err.code)+': '+err.read(500).decode(errors='replace'))
 output=out/(f'{i:03d}-{kind}.mp3')
 output.write_bytes(audio)
 (out/(f'{i:03d}-{kind}.json')).write_text(json.dumps({'text':text,'kind':kind,'model':a.model,'voice':a.voice,'status':'NOT_APPROVED','file':output.name},ensure_ascii=False,indent=2))
 print(i,'/',len(entries),output)
 time.sleep(.35)
print('Review pronunciations with a Malay phonics educator before replacing the demo pack. Explain that voices are AI-generated.')
