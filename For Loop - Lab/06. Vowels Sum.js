function VowelsSum(params) {
  const num = params[0];
  let sum = 0;

  const Vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }

  for (let char of num) {
    if (Vowels[char] !== undefined) {
      sum += Vowels[char]
    }
  }

  console.log(sum);
}

VowelsSum(["hello"]); // Output: 6
VowelsSum(["hi"]); // Output: 3
VowelsSum(["bamboo"]); // Output: 9
VowelsSum(["beer"]); // Output: 4