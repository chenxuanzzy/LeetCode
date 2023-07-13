/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const ans = [];
  const regg = /[a-zA-Z]/;
  const filterArr = s.split("").filter((x) => regg.test(x));
  for (let i = 0; i < s.length; i++) {
    if (regg.test(s[i])) {
      ans.push(filterArr.pop());
    } else {
      ans.push(s[i]);
    }
  }
  return ans.join("");
};
