const assert = require('assert');
Object.freeze(assert);
const sumOfOther  = require('./src/sumOfOther');

describe('sum', () => {
  it('0', () => {
    const solution = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solution, [8, 7, 6, 9]);
  });

  it('1', () => {
    const solution = sumOfOther([]);
    assert.deepEqual(solution, []);
  }); 
})