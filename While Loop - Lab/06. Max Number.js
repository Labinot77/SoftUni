function maxNumber(params) {
  let highestNumber = -Infinity;
  let i = 0;

  while (i < params.length) {
    let input = params[i];
    let number = Number(input);

    if (input === "Stop") {
      break;
    }


    if (number > highestNumber) {
      highestNumber = number;
    }

    i++;
  }

  console.log(highestNumber)
}

maxNumber(["100", "99", "80", "70", "Stop"]);
