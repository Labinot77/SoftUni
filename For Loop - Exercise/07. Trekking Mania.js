function trekkingMania(params) {
  const groupCount = Number(params[0]);
  let totalClimbers = 0;

  let Mountains = {
     musalaCount: 0,
     montBlancCount: 0,
     kilimanjaroCount: 0,
     k2Count: 0,
     everestCount: 0,
  }

  for (i = 1; i <= groupCount;i++) {
    let climbers = Number(params[i]);
    totalClimbers += climbers

    if (climbers <= 5) {
      Mountains.musalaCount += climbers;
    } else if (climbers <= 12) {
      Mountains.montBlancCount += climbers;
    } else if (climbers <= 25) {
      Mountains.kilimanjaroCount += climbers;
    } else if (climbers <= 40) {
      Mountains.k2Count += climbers;
    } else {
      Mountains.everestCount += climbers;
    }
  }

  console.log(`${(Mountains.musalaCount / totalClimbers * 100).toFixed(2)}%`);
  console.log(`${(Mountains.montBlancCount / totalClimbers * 100).toFixed(2)}%`);
  console.log(`${(Mountains.kilimanjaroCount / totalClimbers * 100).toFixed(2)}%`);
  console.log(`${(Mountains.k2Count / totalClimbers * 100).toFixed(2)}%`);
  console.log(`${(Mountains.everestCount / totalClimbers * 100).toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78"
]);

