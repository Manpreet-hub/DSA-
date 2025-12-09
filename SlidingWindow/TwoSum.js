//I/P:- [2,7,11,15], target=9
//O/P:- [0,1]

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 9));

//better approach
function twoSumOptimize(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let pairToFind = target - arr[i];
    if (pairToFind && map[pairToFind] !== i) {
      return [i, map[pairToFind]];
    }
  }
}

console.log(twoSumOptimize([2, 7, 11, 15], 13));
