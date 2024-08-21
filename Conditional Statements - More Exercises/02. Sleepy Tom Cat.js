function sleepyTomCat(params) {
  const breakDaysCount = Number(params[0]);

  const restDays = breakDaysCount * 127;
  const workingDays = (365 - breakDaysCount) * 63;
  const totalPlayTime = restDays + workingDays;
  const difference = 30000 - totalPlayTime;
  const absoluteDifference = Math.abs(difference);
  
  const H = Math.floor(absoluteDifference / 60);
  const M = absoluteDifference % 60;

  if (totalPlayTime > 30000) {
    console.log("Tom will run away");
    console.log(`${H} hours and ${M} minutes more for play`);
  } else {
    console.log("Tom sleeps well");
    console.log(`${H} hours and ${M} minutes less for play`);
  }
}

sleepyTomCat([113]);
