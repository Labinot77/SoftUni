function sumNumbers(params) {
  let sum = 0;

  for (i = 1; i < params.length; i++) {
    sum += Number(params[i]);
    
    if (sum >= Number(params[0])) {
      console.log(sum);
    }
  }

}

sumNumbers(["100",
  "10",
  "20",
  "30",
  "40"])
  