/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    let binaryNum = i.toString(2);
    if (binaryNum.length >= 2) {
      let oneString = 0;
      binaryNum.split("").map((num) => {
        if (num === "1") oneString += 1;
      });
      ans.push(oneString);
    } else {
      ans.push(Number(binaryNum));
    }
  }
  return ans;
};
//Time Complexity: O(n^2)
//Space Complexity: O(n)

var countBits = function (n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};
//Time Complexity: O(n)
//Space Complexity: O(1)
