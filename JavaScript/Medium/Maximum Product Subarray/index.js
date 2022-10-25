/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [2, 3, -2, 4];
var maxProduct = function (nums) {
  let max = -Infinity;
  let curMax = 1;
  let curMin = 1;
  for (let i = 0; i < nums.length; i++) {
    let preMax = curMax;
    curMax = Math.max(nums[i], preMax * nums[i], curMin * nums[i]);
    curMin = Math.min(nums[i], preMax * nums[i], curMin * nums[i]);
    max = Math.max(curMax, max);
  }
  return max;
};
maxProduct(nums);

//Time Complexity: O(n)
//Space Complexity: O(1)
