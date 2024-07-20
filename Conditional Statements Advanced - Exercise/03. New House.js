// function NewHouse(params) {
//   const flowerType = params[0];
//   const flowerCount = Number(params[1]);
//   const budget = Number(params[2]);

//   const flowerPrices = {
//     "Roses": 5,
//     "Dahlias": 3.80,
//     "Tulips": 2.80,
//     "Narcissus": 3,
//     "Gladiolus": 2.50,
// };

//   let totalCost = flowerCount * flowerPrices[flowerType];

//   if (flowerType === "Roses" && flowerCount > 80) {
//     totalCost *= 0.90;
//   } else if (flowerType === "Dahlias" && flowerCount > 90) {
//     totalCost *= 0.85
//   } else if (flowerType === "Tulips" && flowerCount > 80) {
//     totalCost *= 0.85
//   } else if (flowerType === "Narcissus" && flowerCount < 120) {
//     totalCost *= 1.15
//   } else if (flowerType === "Gladiolus" && flowerCount < 80) {
//     totalCost *= 1.20
//   }

//   if (budget >= totalCost) {
//     let remainingMoney = budget - totalCost;
//     console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${remainingMoney.toFixed(2)} leva left.`)
//   } else {
//     let neededMoney = totalCost - budget;
//     console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`)
//   }
// }

// More dynamical aproach where the discounts and overcharges are in a table as well
function gardenCost(params) {
  const flowerType = params[0];
  const flowerCount = Number(params[1]);
  const budget = Number(params[2]);

  const flowerPricing = {
      "Roses": { price: 5, discount: { threshold: 80, factor: 0.90 } },
      "Dahlias": { price: 3.80, discount: { threshold: 90, factor: 0.85 } },
      "Tulips": { price: 2.80, discount: { threshold: 80, factor: 0.85 } },
      "Narcissus": { price: 3, surcharge: { threshold: 120, factor: 1.15 } },
      "Gladiolus": { price: 2.50, surcharge: { threshold: 80, factor: 1.20 } }
  };

  const { price, discount, surcharge } = flowerPricing[flowerType];
  let totalCost = price * flowerCount;

  if (discount && flowerCount > discount.threshold) {
      totalCost *= discount.factor; // Apply discount
  } else if (surcharge && flowerCount < surcharge.threshold) {
      totalCost *= surcharge.factor; // Apply surcharge
  }

  if (budget >= totalCost) {
      const remainingMoney = budget - totalCost;
      console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${remainingMoney.toFixed(2)} leva left.`);
  } else {
      const neededMoney = totalCost - budget;
      console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
  }
}


gardenCost(["Roses", "55", "250"]);   // Output: Not enough money, you need 25.00 leva more.
gardenCost(["Tulips", "88", "260"]);  // Output: Hey, you have a great garden with 88 Tulips and 50.56 leva left.
gardenCost(["Narcissus", "119", "360"]);  // Output: Not enough money, you need 50.55 leva more.
gardenCost(["Gladiolus", "60", "200"]); // Output: Not enough money, you need 50.00 leva more.
gardenCost(["Dahlias", "100", "400"]); // 