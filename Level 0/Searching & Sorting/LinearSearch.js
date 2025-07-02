function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2, 4, 1, 0, 2, 1], 10));
