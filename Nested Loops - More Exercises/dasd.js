function generateCombinations(start, end, exclude) {
  let combinations = [];
  let count = 0;

  for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
      for (let j = start.charCodeAt(0); j <= end.charCodeAt(0); j++) {
          for (let k = start.charCodeAt(0); k <= end.charCodeAt(0); k++) {
              let combination = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
              if (!combination.includes(exclude)) {
                  combinations.push(combination);
                  count++;
              }
          }
      }
  }

  console.log(combinations.join(' ') + ' ' + count);
}

// Примерен вход
const start = 'a';
const end = 'c';
const exclude = 'b';

generateCombinations(start, end, exclude);
