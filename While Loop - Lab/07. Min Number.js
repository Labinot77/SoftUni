function findSmallestNumber(params) {
    let minNumber = Infinity;
    let i = 0;
  
    while (i < params.length) {
      let input = params[i];
  
      if (input === "Stop") {
        break;
      }
  
      let number = Number(input);
      if (number < minNumber) {
        minNumber = number;
      }
  
      i++;
    }
  
    console.log(minNumber)
  }
  
  findSmallestNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])
    
    
  