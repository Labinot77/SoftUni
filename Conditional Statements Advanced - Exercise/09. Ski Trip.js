function skiTrip(params) {
  const daysForStay = Number(params[0]);
  const type = params[1];
  const review = params[2];

  const overnightStays = daysForStay - 1;

  const table = {
    "room for one person": {
        price: 18.00,
        discounts: [
            { threshold: 0, discount: 0 }
        ]
    },
    "apartment": {
      price: 25,
      discounts: [
        {threshold: 15, discount: 0.50},
        {threshold: 10, discount: 0.35},
        {threshold: 0, discount: 0.30},
      ]
    },
    "president apartment": {
      price: 35,
      discounts: [
        {threshold: 15, discount: 0.20},
        {threshold: 10, discount: 0.15},
        {threshold: 0, discount: 0.10},
      ]
    }
  }



  const {price, discounts } = table[type];

  const disc = discounts.find((i) => overnightStays > i.threshold).discount;

  let totalCost = price * overnightStays;
  totalCost -= totalCost * disc

  if (review === "positive") {
    totalCost *= 1.25;
  } else if (review === "negative") {
    totalCost *= 0.90;
  }
  
  console.log(totalCost.toFixed(2));
}

// Very good exersize 

skiTrip(["14", "apartment", "positive"]);  // 264.06
skiTrip(["30", "president apartment", "negative"]);  // 730.80
skiTrip(["12", "room for one person", "positive"]);  // 247.50
skiTrip(["2", "apartment", "positive"]);  // 21.88


