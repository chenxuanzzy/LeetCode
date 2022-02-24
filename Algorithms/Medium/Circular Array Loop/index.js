/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = (nums) => {
  if (nums.length < 2) {
    return false;
  }

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      continue;
    }

    let slow = i;
    let fast = advance(nums, slow);
    while (
      nums[i] * nums[fast] > 0 &&
      nums[i] * nums[advance(nums, fast)] > 0
    ) {
      if (slow === fast) {
        if (slow === advance(nums, slow)) {
          break;
        }
        return true;
      }
      slow = advance(nums, slow);
      fast = advance(nums, advance(nums, fast));
    }

    slow = i;
    const sign = nums[i];
    while (sign * nums[slow] > 0) {
      const next = advance(nums, slow);
      nums[slow] = 0;
      slow = next;
    }
  }

  return false;
};

const advance = (nums, i) => {
  const n = nums.length;
  const val = (i + nums[i]) % n;

  return i + nums[i] >= 0 ? val : n + val;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
