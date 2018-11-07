const assert = require('assert');
Object.freeze(assert);
const sumOfOther  = require('./src/sumOfOther');
const make  = require('./src/make');
const recursion  = require('./src/recursion');

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
  it('4', () => {
    const mult = (a, b) => a * b;
    const solution = make(1)(2, 3, 4)(mult);
    assert.deepEqual(solution, 24);
  });
});

describe('recursion', () => {
  it('1', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const solution = recursion(tree);
    assert.deepEqual(solution, [[100], [90, 120], [70,99,110,130]]);
  });
});

