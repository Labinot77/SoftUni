function uniquePINCodes(params) {
  const firstNumber = Number(params[0]);
  const secondNumber = Number(params[1]);
  const thirdNumber = Number(params[2]);

  const primeNumbers = [2, 3, 5, 7];

  for (x = 1; x <= firstNumber; x++) {
    if (x % 2 === 0) {
      for (y = 2; y <= secondNumber;y++) {
        if (primeNumbers.includes(y)) {
          for (z = 1; z <= thirdNumber; z++) {
            if(z % 2 === 0) {
              console.log(`${x} ${y} ${z}`);
            }
          }
        }
      }
    }
  }
}

uniquePINCodes([3, 15, 5])