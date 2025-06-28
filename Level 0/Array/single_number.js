// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [2, 2, 1] → Output: 1
// Input: nums = [4, 1, 2, 1, 2] → Output: 4
// Input: nums = [1] → Output: 1

function findSingleNumber(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}

var singleNumber = function (arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
};

console.log(findSingleNumber([4, 1, 2, 1, 2]));
console.log(findSingleNumber([2, 2, 1]));
console.log(findSingleNumber([1]));
