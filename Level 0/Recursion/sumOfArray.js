// Input: [5, 2, 6, 1, 3]
// Output: 17

let arr = [5, 2, 6, 1, 3];
function sumOfArrayElements(n) {
  if (n == 0) return arr[n];
  return arr[n] + sumOfArrayElements(n - 1);
}
console.log(sumOfArrayElements(arr.length - 1));

//Sum Of Odd
function sumOfOddElements(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOfOddElements(n - 1);
}

console.log(sumOfOddElements(arr.length - 1));
