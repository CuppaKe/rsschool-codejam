const assert = require('assert');
Object.freeze(assert);
const sumOfOther  = require('./src/sumOfOther');
const make  = require('./src/make');

describe('sum', () => {
  it('1', () => {
    const solution = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solution, [8, 7, 6, 9]);
  });

  it('2', () => {
    const solution = sumOfOther([]);
    assert.deepEqual(solution, []);
  }); 
});

describe('makeSum', () => {
  it('1', () => {
    const sum = (a, b) => a + b;
    const solution = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solution, 777);
  });

  it('2',  () => {
    const solution = make();
    assert.deepEqual(solution, 0);
  });
  
  it('3', () => {
    const sum = (a, b) => a + b;
    const solution = make(15)(34, 21, 666)(41)(23, sum);
    assert.deepEqual(solution, 800);
  });
})

