/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (nums[i] != i) return i;
  }
  return n;
};
//Time Complexity: O(n log n)
//Space Complexity: O(log n)

var missingNumber = function (nums) {
  const set = new Set();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
  }
  let missing = -1;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};

//Time Complexity: O(n)
//Space Complexity: O(n)
