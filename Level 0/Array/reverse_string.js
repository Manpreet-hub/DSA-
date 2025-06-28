// Example 1:
// Input:s = [“h”,”e”,”l”,”l”,”o”]
// Output:[“o”,”l”,”l”,”e”,”h”]

// Example 2:
// Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]
// Output:[“h”,”a”,”n”,”n”,”a”,”H”]

function reverseString(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    start++;
    end--;
  }
  return str;
}
console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["M", "a", "n"]));
