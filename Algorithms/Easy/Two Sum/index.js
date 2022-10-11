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

//Time Complexity: O(n^2)
//Space Complexity: O(1)
