function cake(params) {
  const length = Number(params[0]);
  const width = Number(params[1]);
  const totalPieces = length * width
  let remaningPieces = totalPieces
  let index = 2;

  
  while (index < params.length ) {
    let command = params[index];

    if (command === "STOP") {
      console.log(`${remaningPieces} pieces are left.`);
      return;
    }
    
    let piecesTaken = Number(params[index]);
    remaningPieces -= piecesTaken;

    if (remaningPieces < 0) {
      console.log(`No more cake left! You need ${Math.abs(remaningPieces)} pieces more.`)
      return;
    }

    index++
  } 

  console.log(`${remaningPieces} pieces are left.`);
}

cake(["10",
  "10",
  "20",
  "20",
  "20",
  "20",
  "21"])
  