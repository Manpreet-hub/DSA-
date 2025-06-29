// Input: 8
// Output: true (8 → 4 → 2 → 1)

// Input: 18
// Output: false

function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n % 2 !== 0 || n < 1) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(18));
