function oscars(params) {
  const name = params[0];
  let points = Number(params[1]);
  const evaluaters = Number(params[2]);

  const evaluatorsData = params.slice(3);

  for (i = 0; i < evaluaters; i++) {
    let evaluatorName = evaluatorsData[i * 2];
    let evaluatorPoints = Number(evaluatorsData[i * 2 + 1]);

    let pointsFromEvaluator = (evaluatorName.length * evaluatorPoints) / 2;

    points += pointsFromEvaluator

    if (points > 1250.5) {
      console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`)
      return;
    }
  }

  console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`);
}

oscars(["Zahari Baharov",
  "313",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39"])
