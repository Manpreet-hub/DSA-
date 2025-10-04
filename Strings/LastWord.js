//Last word count

//1st approach
// function findLastWord(s) {
//   s = s.trim().split(" ");
//   return s[s.length - 1].length;
// }

// console.log(findLastWord("Hello World HII  "));

// 2nd approach
// function findLastWord(s) {
//   let n = s.length - 1;

//   while (n >= 0) {
//     if (s[n] === " ") {
//       --n;
//     } else {
//       break;
//     }
//   }

//   let count = 0;
//   while (n >= 0) {
//     if (s[n] !== " ") {
//       ++count;
//       --n;
//     } else {
//       break;
//     }
//   }
//   return count;
// }

function findLastWord(s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] !== " ") break;
    --n;
  }
  let count = 0;
  while (n >= 0) {
    if (s[n] == " ") break;
    --n;
    ++count;
  }
  return count;
}

//3rd approach

function findLaswordWithOneLoop(s) {
  let n = s.length - 1;
  let count = 0;

  while (n > 0) {
    if (s[n] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
}
console.log(findLaswordWithOneLoop("Hi I am Manpreet Singh"));
