/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let arr_s = Array.from(s).sort().join("");
  let arr_t = Array.from(s).sort().join("");
  return arr_s === arr_t ? true : false;
};
//Time Complexity: O(nlogn)
//Space Complexity: O(1)

//Hash Mapping
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; ++i) {
    if (count[t[i]]) {
      count[t[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
