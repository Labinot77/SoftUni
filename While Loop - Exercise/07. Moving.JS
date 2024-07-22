function moving(params) {
  const width = Number(params[0]);
  const length = Number(params[1]);
  const heigth = Number(params[2]);
  const totalSpace  = width * length * heigth;
  let sum = 0;
  let index = 3;

  while (index < params.length) {
    const command = params[index];
    
    if (command === "Done") {
      console.log(`${totalSpace - sum} Cubic meters left.`); // ! Space left when commnad === "Done"
      return;
    };

    const boxSize = Number(params[index]);
    sum += boxSize;

    if (sum > totalSpace) {
      console.log(`No more free space! You need ${sum - totalSpace} Cubic meters more.`); // ! Needed Space
      return;
    }

    index++;
  }

  console.log(`${totalSpace - sum} Cubic meters left.`);
}

moving(["10", 
  "10",
  "2",
  "20",
  "20",
  "20",
  "20",
  "122"])
  