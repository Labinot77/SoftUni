function BonusScore(params) {
  let InitialTime = Number(params[0]);
  let bonus

  if (InitialTime <= 100) {
    bonus = 5
  } else if (InitialTime > 100 && InitialTime <= 1000) {
    bonus = InitialTime * 0.20
  } else if (InitialTime > 1000) {
    bonus = InitialTime * 0.10
  }

  if (InitialTime % 2 === 0) {
    bonus += 1;
  } else if (InitialTime % 10 === 5) {
    bonus += 2;
  }

  console.log(bonus)
  console.log(bonus + InitialTime)

}

BonusScore(["20"])