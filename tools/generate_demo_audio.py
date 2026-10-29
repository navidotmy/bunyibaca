#!/usr/bin/env python3
"""Generate explicitly experimental Malay eSpeak audio fallback; NOT validated phoneme recordings.
Run: python3 tools/generate_demo_audio.py --free-only (or --all)
Requires espeak + ffmpeg; no secret, network, or cloud API needed.
"""
import json,subprocess,sys,re,unicodedata
from pathlib import Path
base=Path(__file__).resolve().parent.parent
free='--all' not in sys.argv
entries=json.loads(subprocess.check_output(['node','tools/build_audio_catalog.mjs']+(['--free-only'] if free else []),cwd=base))
def name(text):
 text=unicodedata.normalize('NFC',text).lower()
 clean=''.join(ch if ch.isalpha() or ch.isdigit() else '_' for ch in text)
 if len(clean)<=80:return clean
 h=2166136261
 for ch in text:h=((h^ord(ch))*16777619)&0xffffffff
 return clean[:48]+'_'+format(h,'x')
manifest=[]
for e in entries:
 kind,text=e['kind'],e['text'];slug=f'{kind}/{name(text)}.mp3';path=base/'assets'/'audio'/slug
 if len(text)==1 and text.lower() not in 'aiueo':continue # isolated consonants require specialist recording
 if text=='-':continue
 path.parent.mkdir(parents=True,exist_ok=True)
 if not path.exists():
  raw=subprocess.check_output(['espeak','-v','ms','-s','135','--stdout',text],stderr=subprocess.DEVNULL)
  cp=subprocess.run(['ffmpeg','-loglevel','error','-y','-f','wav','-i','pipe:0','-ac','1','-ar','22050','-b:a','40k',str(path)],input=raw,stdout=subprocess.PIPE,stderr=subprocess.PIPE)
  if cp.returncode:print('Audio failed:',text,cp.stderr.decode(),file=sys.stderr);continue
 manifest.append(slug)
(out:=base/'audio-manifest.mjs').write_text('/* Unreviewed demonstrator audio: synthetic Malay eSpeak; NOT native speaker verified. */\nexport const AUDIO_FILES = '+json.dumps(sorted(set(manifest)),ensure_ascii=False,indent=2)+';\n')
(base/'audio-manifest.json').write_text(json.dumps(sorted(set(manifest)),ensure_ascii=False,indent=2))
print('Generated',len(set(manifest)),'prototype audio files. Review every pronunciation before public release.')
