// Input: numbers = [2,7,11,15], target = 9

// Output: [1,2]

function twoSumSortedInput(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
}

console.log(twoSumSortedInput([2, 7, 11, 15], 9));
