/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    while (windowSum >= target) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);

      windowSum -= nums[windowStart];
      windowStart += 1;
    }
  }
  return (minLength = minLength === Infinity ? 0 : minLength);
};
//Time Complexity: O(n)
//Space Complexity: O(1)
