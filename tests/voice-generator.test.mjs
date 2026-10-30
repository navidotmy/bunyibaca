import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const tool='tools/generate_azure_voice.py';
function check(args) {
  return spawnSync('python3',[tool,...args],{cwd:root,encoding:'utf8',env:{...process.env,AZURE_SPEECH_KEY:'',AZURE_SPEECH_REGION:''}});
}
test('Azure audition generator previews first 16 clips without credentials or network calls',()=>{
  const r=check(['--dry-run','--limit','16']);
  assert.equal(r.status,0,r.stderr);
  assert.match(r.stdout,/CLIPS=16/);
  assert.match(r.stdout,/emak/);
  assert.match(r.stdout,/ekor/);
  assert.match(r.stdout,/DRY RUN/);
});
test('Full catalog excludes isolated consonant letter names while retaining Malay words',()=>{
  const r=check(['--all','--dry-run','--limit','1000']);
  assert.equal(r.status,0,r.stderr);
  assert.match(r.stdout,/word\s+baca/);
  assert.doesNotMatch(r.stdout,/segment\s+b(?:\s|$)/m);
  assert.doesNotMatch(r.stdout,/segment\s+ny(?:\s|$)/m);
});
test('No Azure API request can run without explicit billing approval',()=>{
  const r=check(['--limit','1']);
  assert.equal(r.status,0,r.stderr);
  assert.match(r.stdout,/no API calls made/);
});