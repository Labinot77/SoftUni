function SmallShop(params) {
  const product = params[0];
  const city = params[1];
  const quantity = Number(params[2]);

  const Prices = {
    Sofia: {
      coffee: 0.50,
      water: 0.80,
      beer: 1.20,
      sweets: 1.45,
      peanuts: 1.60
    },
    Plovdiv: {
      coffee: 0.40,
      water: 0.70,
      beer: 1.15,
      sweets: 1.30,
      peanuts: 1.50
    },
    Varna: {
      coffee: 0.45,
      water: 0.70,
      beer: 1.10,
      sweets: 1.35,
      peanuts: 1.55
    }
  };

  if (Prices[city] && Prices[city][product]) {
    const totalPrice = Prices[city][product] * quantity;
    console.log(totalPrice.toFixed(2));
  }
}

SmallShop(["coffee", "Sofia", "2"]);    // Output: 1.00
SmallShop(["water", "Plovdiv", "3"]);   // Output: 2.10
SmallShop(["beer", "Varna", "1.5"]);    // Output: 1.65
SmallShop(["sweets", "Sofia", "2"]);    // Output: 2.90
SmallShop(["peanuts", "Plovdiv", "1"]); // Output: 1.50