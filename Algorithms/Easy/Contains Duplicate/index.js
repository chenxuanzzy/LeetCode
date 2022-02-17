/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Presorting Solution
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < num.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

//Time Complexity: O(n log n)
//Space Complexity: O(log n)

//Hash Mapping Solution
var containsDuplicate = function (nums) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
//Time Complexity: O(n)
//Space Complexity: O(n)
