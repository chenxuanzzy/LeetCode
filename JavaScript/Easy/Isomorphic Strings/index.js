/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
  const charS = {};
  const charT = {};
  for (let i = 0; i < s.length; i++) {
    if (charS[s[i]] !== charT[t[i]]) {
      return false;
    }
    charS[s[i]] = i;
    charT[t[i]] = i;
  }
  return true;
};
//Time Complexity: O(n)
//Space Complexity: O(1)
