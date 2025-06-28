// Input: nums = [1,1,0,1,1,1]
//     Output: 3
//     Explanation: The first two digits or the last three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
//     Output: 2

function maxConsecutiveOne(arr) {
  let curCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      curCount++;
    } else {
      maxCount = Math.max(curCount, maxCount);
      curCount = 0;
    }
  }
  return Math.max(maxCount, curCount);
}

console.log(maxConsecutiveOne([1, 1, 0, 1, 1, 1]));
