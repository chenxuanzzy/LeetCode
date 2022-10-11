/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      sum -= symbols[s[i]];
    } else {
      sum += symbols[s[i]];
    }
  }
  return sum;
};
//Time Complexity: O(n)
//Space Complexity: O(1)
