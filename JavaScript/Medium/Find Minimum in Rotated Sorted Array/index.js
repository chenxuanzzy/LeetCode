/**
 * @param {number[]} nums
 * @return {number}
 */
let nums = [11, 13, 15, 17];
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
};
findMin(nums);
//Time Complexity: O(log n)
//Space Complexity: O(1)
