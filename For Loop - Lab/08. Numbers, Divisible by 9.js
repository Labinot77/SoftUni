  function Numbers(params) {
    const start = Number(params[0]);
    const end = Number(params[1]);
    let sum = 0;
    let numbers = [];

    for (let i = start; i <= end; i++) {
      if (i % 9 === 0) {
        sum += i;
        numbers.push(i)
      }
    }

    console.log(`The sum: ${sum}`);
    for (let number of numbers) {
      console.log(number)
    }
  }

  Numbers(["100", "200"]); 
