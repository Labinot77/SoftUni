function ExcursionCalculator(params) {
  const numberOfPeople = Number(params[0]);
  const season = params[1];

  const Table = {
      lessThan5: {
          "spring": 50.00,
          "summer": 48.50,
          "autumn": 60.00,
          "winter": 86.00
      },
      moreThan5: {
          "spring": 48.00,
          "summer": 45.00,
          "autumn": 49.50,
          "winter": 85.00
      }
    };

    let pricePerPerson = numberOfPeople <= 5 ? Table["lessThan5"][season] : Table["moreThan5"][season];

    let totalCost = numberOfPeople * pricePerPerson;

    if (season === "summer") {
        totalCost *= 0.85;  // discount
    } else if (season === "winter") {
        totalCost *= 1.08; // overcharge
    }

    console.log(`${totalCost.toFixed(2)} leva.`);
}