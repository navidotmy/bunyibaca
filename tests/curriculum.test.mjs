import test from 'node:test';
import assert from 'node:assert/strict';
import {WORLDS,ALL_LESSONS,FREE_LESSONS,TOTAL_LESSONS} from '../curriculum.mjs';
test('12 complete learning worlds with 8 lessons each',()=>{assert.equal(WORLDS.length,12);assert.equal(TOTAL_LESSONS,96);for(const w of WORLDS)assert.equal(w.lessons.length,8);});
test('substantial free programme',()=>{assert.equal(FREE_LESSONS,32);assert.ok(WORLDS.slice(0,4).every(w=>w.free));assert.ok(WORLDS.slice(4).every(w=>!w.free));});
test('unique lessons, no empty content, and valid choices',()=>{const ids=ALL_LESSONS.map(l=>l.id);assert.equal(new Set(ids).size,ids.length);for(const l of ALL_LESSONS){assert.ok(l.title);assert.ok(l.words.length>0);if(['story','sentence'].includes(l.mode)){assert.ok(l.text?.length>12);assert.ok(l.options.includes(l.answer));}else{for(const x of l.words){assert.ok(x.word);assert.ok(x.parts.length>=1);assert.equal(x.word,x.parts.join(''));}}}});
test('no text contains inadvertent source delimiters',()=>{for(const l of ALL_LESSONS){assert.ok(!l.title.includes('|'));for(const x of l.words)assert.ok(!x.word.includes('~'));}});
