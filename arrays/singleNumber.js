/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */

var singleNumber = function (nums) {
  for (i = 0; i <= nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

let result = singleNumber([2, 2, 33, 33, 3]);

console.log(result);