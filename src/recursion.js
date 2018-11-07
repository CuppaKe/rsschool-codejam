/**
 * Function converts tree object to array
 * @param {Oject} tree - tree as an object
 * @return {}  array
 */
module.exports = function recursion(tree) {
  const res = [];
  let count = 0;
  function rec(obj) {
    res[count] ? res[count].push(obj.value) : res[count] = [obj.value];
    if (obj.left) {
      count++;
      rec(obj.left);
      count--;
    }
    if (obj.right) {
      count++;
      rec(obj.right);
      count--;
    }
  }
  rec(tree);
  return res;
};
