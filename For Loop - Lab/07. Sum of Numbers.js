function sumOfNumbers(params) {
  let n = params[0];
  let sum = 0;

  for (let num of n) {
    sum += Number(num)
  }

  console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"])