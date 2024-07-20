function SumSeconds(params) {
  let Num1 = Number(params[0]);
  let Num2 = Number(params[1]);
  let Num3 = Number(params[2]);

  let totalTime = Num1 + Num2 + Num3; 

  let Minutes = Math.floor(totalTime / 60)
  let Seconds = totalTime % 60

  if (Seconds < 10) {
    console.log(`${Minutes}:0${Seconds}`)
  } else {
    console.log(`${Minutes}:${Seconds}`)
  }

}

SumSeconds(["35", "45", "44"])