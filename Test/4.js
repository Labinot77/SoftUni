function workout(params) {
  const Days = Number(params[0]);
  let ranKM = Number(params[1]);
  let totalKM = ranKM;

  for (i = 2; i < params.length; i++) {
    const Increase = Number(params[i]);
    ranKM += ranKM * (Increase / 100);
    totalKM += ranKM;
  }

  if (totalKM >= 1000) {
    const extraKM = Math.ceil(totalKM - 1000);
    console.log(`You've done a great job running ${extraKM} more kilometers!`);
  } else {
    const missingKM = Math.ceil(1000 - totalKM);
    console.log(`Sorry Mrs. Ivanova, you need to run ${missingKM} more kilometers`);
  }
}

workout(["5", "30", "10", "15", "20", "5", "12"]);
