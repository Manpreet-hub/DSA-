// Given array: [1, 3, 5, 7, 9]
// Target: 7
//O/p:- 3

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3));
