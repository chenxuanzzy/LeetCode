/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function (n) {
  let binaryNum = n.toString();
  let num = 0;
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === "1") {
      num += 1;
    }
  }
  return num;
};
// Time Complexity : O(n)
// Space Complexity : O(1)

var hammingWeight = function (n) {
  return n.toString(2).replace(/0+/g, "").length;
};

// Time Complexity : O(n)
// Space Complexity : O(n)
