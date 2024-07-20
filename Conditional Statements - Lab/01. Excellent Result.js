function isExcellent(params) {
  let Grade = Number(params[0]);

  if (Grade >= 5.50) {
    console.log("Excellent!");
  }
}

isExcellent(["5.50"]);