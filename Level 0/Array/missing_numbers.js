//  Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2

function missingNumber(nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < nums.length; i++) {
    partialSum += nums[i];
  }
  return totalSum - partialSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
