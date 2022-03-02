/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let left = 0;
  let right = -1;
  let sum = 0;
  while (right < nums.length) {
    if (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    } else {
      right++;
      sum += nums[right];
    }
  }
  return min === Infinity ? 0 : min;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
