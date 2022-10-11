/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  for (let j = k; j < n; j++) {
    sum = sum - nums[j - k] + nums[j];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / 5;
};
//Time Complexity: O(n)
//Space Complexity: O(1)
