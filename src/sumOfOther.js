/**
 * Function finds sum of integers of array minus integer on its position
 * @param {array} array - unsorted array of integers
 * @return {array}  resulted array
 */
module.exports = function sumOfOther(array) {
  const sum = array.reduce((acc, b) => acc + b, 0);
  return array.map(a => sum - a);
}
