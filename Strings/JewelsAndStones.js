//I/P:- jewels:- "aA" , stones:- "aAAbbbb"
// O/P:- 3

// function findJewelsAndStones(jewels, stones) {
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     if (jewels.includes(stones[i])) {
//       count++;
//     }
//   }
//   return count;
// }

//without include method
function findJewelsAndStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(findJewelsAndStones("aA", "aAAbbbb"));

//2nd approach (optimize approach)

function findJewelsAndStonesWithOptimizeApproach(jewels, stones) {
  let count = 0;
  let jSet = new Set();

  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) {
      count++;
    }
  }
  return count;
}

console.log(findJewelsAndStonesWithOptimizeApproach("aA", "aAAbbbb"));
