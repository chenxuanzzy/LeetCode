/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  let pre = 0;
  let maxAns = nums[0];
  nums.forEach((num) => {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(pre, maxAns);
  });
  return maxAns;
};
maxSubArray(nums);

//Time Complexity: O(n)
//Space Complexity: O(1)
//Dynamic Programming
