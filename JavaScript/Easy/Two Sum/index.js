/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// Force Solution

var twoSum2 = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let count = target - nums[i];
    if (map[count] !== undefined) {
      return [i, map[count]];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
// Time Complexity: O(n)
// Space Complexity: O(1)
// Hash Table
