function histogram(params) {
  const n = Number(params[0]);
  const numbers = params.slice(1).map(Number);

  let countP1 = 0;
  let countP2 = 0;
  let countP3 = 0;
  let countP4 = 0;
  let countP5 = 0;

  for (i = 0;i < n;i++) {
    const number = numbers[i]
    if (number < 200) {
      countP1++;
  } else if (number >= 200 && number < 400) {
      countP2++;
  } else if (number >= 400 && number < 600) {
      countP3++;
  } else if (number >= 600 && number < 800) {
      countP4++;
  } else if (number >= 800) {
      countP5++;
    }
  }

  const p1 = (countP1 / n * 100).toFixed(2) + "%";
  const p2 = (countP2 / n * 100).toFixed(2) + "%";
  const p3 = (countP3 / n * 100).toFixed(2) + "%";
  const p4 = (countP4 / n * 100).toFixed(2) + "%";
  const p5 = (countP5 / n * 100).toFixed(2) + "%";

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);
  console.log(p5);
}

histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
// histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);