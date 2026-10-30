import test from 'node:test';
import assert from 'node:assert/strict';
import {BOOKS,BOOK_PAGES,getBook,getBookPage,SERIES_PAGE_COUNT,FREE_SERIES_PAGE_COUNT} from '../reading-series.mjs';
test('original digital phonics series has eight complete graded books',()=>{
 assert.equal(BOOKS.length,8);assert.equal(SERIES_PAGE_COUNT,64);
 for(const b of BOOKS){assert.equal(b.pages.length,8);assert.ok(b.parent);assert.ok(b.skills.length>=4);assert.ok(b.pages.every(p=>p.tip&&p.title&&p.description));}
 assert.deepEqual([...new Set(BOOKS.flatMap(b=>b.pages.map(p=>p.id)))].length,64);
});
test('generous free original reading library beside existing free lessons',()=>{
 assert.equal(FREE_SERIES_PAGE_COUNT,24);assert.equal(BOOKS.filter(b=>b.free).length,3);
 assert.equal(getBook('bb1')?.free,true);assert.equal(getBook('bb4')?.free,false);
});
test('page structure and check activities are internally consistent',()=>{
 for(const b of BOOKS){const kinds=b.pages.map(p=>p.kind);assert.deepEqual(kinds,['listen','blend','ladder','words','contrast','sentence','story','check']);
 for(const item of b.pages[1].blends)assert.ok(item.parts.length>0&&item.outcome);
 for(const item of b.pages[3].words)assert.equal(item.label,item.parts.join(''));
 const quiz=b.pages[7].quiz;assert.ok(quiz.choices.includes(quiz.answer));assert.equal(getBookPage(b.id,8).id,b.pages[7].id);
 }
 assert.equal(BOOK_PAGES.length,64);
});