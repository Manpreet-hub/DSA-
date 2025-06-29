// Input: 5
// Output: 15
// 5 + 4 + 3 + 2 + 1 = 15

function sumOfFirstN(n) {
  if (n == 0) return 0;

  return n + sumOfFirstN(n - 1);
}

console.log(sumOfFirstN(5));
