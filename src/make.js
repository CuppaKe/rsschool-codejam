/**
 * Function finds sum of integers
 * @param {} - integers or function
 * @return {}  resulted sum
 */
module.exports = function make() {
  if (arguments.length === 0) return 0;
  const array = [];
  array.push(...arguments);
  const f = (...arg) => {
    array.push(...arg);
    return typeof arg[arg.length - 1] !== 'function' ? f : array.slice(0, -1).reduce(arg[arg.length - 1]);
  };
  return f;
}