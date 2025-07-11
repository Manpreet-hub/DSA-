// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}
console.log(removeDuplicates([1, 1, 2]));
