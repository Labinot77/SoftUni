function maxNumber(params) {
  let highestNumber = -Infinity;
  let i = 0;

  while (i < params.length) {
    let input = params[i];

    if (input === "Stop") {
      break;
    }

    let number = Number(input);
    if (number > highestNumber) {
      highestNumber = number;
    }

    i++;
  }

  console.log(highestNumber)
}

maxNumber(["100", "99", "80", "70", "Stop"]);
