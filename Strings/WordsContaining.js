// Input: words = ["leet","code"], x = "e"
// Output: [0,1]

//1st approach
function findwordsContaining(str, x) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findWordContaining(["leet", "code"], "e"));

//2nd approach
function findWordContaining(str, x) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      if (str[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}
