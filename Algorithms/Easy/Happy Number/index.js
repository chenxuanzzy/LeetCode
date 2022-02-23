/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let store = {};
  while (!store[n] && n != 1) {
    store[n] = n;
    n.toString()
      .split("")
      .forEach((num, i) => {
        if (i == 0) n = 0;
        n += num * num;
      });
    n = parseInt(n);
  }
  return n == 1;
};
//Time Complexity: O(nlogn)
//Space Complexity: O(1)
