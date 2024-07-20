function Journey(params) {
  const Budget = Number(params[0]);
  const Season = params[1];

  let destination;

  const Destinations = {
    Bulgaria: {
      summer: { type: "Camp", rate: 0.30 },
      winter: { type: "Hotel", rate: 0.70 }
    },
    Balkans: {
      summer: { type: "Camp", rate: 0.40 },
      winter: { type: "Hotel", rate: 0.80 }
    },
    Europe: {
      summer: { type: "Hotel", rate: 0.90 },
      winter: { type: "Hotel", rate: 0.90 }
    }
  };

  if (Budget <= 100) {
    destination = "Bulgaria"
  } else if (Budget <= 1000) {
    destination = "Balkans" 
  } else {
    destination = "Europe"
  }

  let vacationType = Destinations[destination][Season].type;
  let spentAmount = Destinations[destination][Season].rate * Budget;

  console.log(`Somewhere in ${destination}`);
  console.log(`${vacationType} - ${spentAmount.toFixed(2)}`);

}


Journey(["50", "summer"]); // Somewhere in Bulgaria; Camp - 15.00
Journey(["75", "winter"]); // Somewhere in Bulgaria; Hotel - 52.50
Journey(["312", "summer"]); // Somewhere in Balkans; Camp - 124.80
Journey(["678.53", "winter"]); // Somewhere in Balkans; Hotel - 542.82
Journey(["1500", "summer"]); // Somewhere in Europe; Hotel - 1350.00