//Max vowels and consonant counts
// Input: s = "successes"
// maxVowels= 2 maxConsonant=4
// Output: 6

function findMaxVowelConsonantCount(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  let maxVowels = 0;
  let maxConsonant = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      //   maxVowels = Math.max(maxVowels, map[str[i]]);
      if (maxVowels < map[str[i]]) {
        maxVowels = map[str[i]];
      }
    } else {
      //   maxConsonant = Math.max(maxConsonant, map[str[i]]);
      if (maxConsonant < map[str[i]]) {
        maxConsonant = map[str[i]];
      }
    }
  }
  return maxVowels + maxConsonant;
}

//With optimal approach O(n)

function findMaxVowelAndConsonantCount(str) {
  let map = {};
  //O(n)
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }
  let mapkeys = Object.keys(map);
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowels = 0;
  let maxConsonant = 0;

  //O(1)
  for (let i = 0; i < mapkeys.length; i++) {
    if (vowels.includes(mapkeys[i])) {
      maxVowels = Math.max(maxVowels, map[mapkeys[i]]);
    } else {
      maxConsonant = Math.max(maxConsonant, map[mapkeys[i]]);
    }
  }
  return maxConsonant + maxVowels;
}

//2nd loop will run for 3 characters due to map
console.log(findMaxVowelAndConsonantCount("successes"));
