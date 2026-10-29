import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,statSync} from 'node:fs';
import {AUDIO_FILES} from '../audio-manifest.mjs';
test('offline synthetic audio pack is complete and non-empty',()=>{
 assert.ok(AUDIO_FILES.length>200);
 for(const f of AUDIO_FILES){assert.ok(!f.includes('..'));const path=new URL('../assets/audio/'+f,import.meta.url);assert.ok(existsSync(path),`Missing audio: ${f}`);assert.ok(statSync(path).size>100,`Empty audio: ${f}`);}
});
