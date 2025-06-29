// Input: 5
// Output: 120 (5 * 4 * 3 * 2 * 1)

function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));
