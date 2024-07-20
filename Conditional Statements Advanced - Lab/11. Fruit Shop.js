function FruitShop(params) {
  const Food = params[0];
  const Day = params[1];
  const Quantity = Number(params[2]);

  const Weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const Weekends = ["Saturday", "Sunday"];

  const WeekPrices = {
    "banana": 2.50,
    "apple": 1.20,
    "orange": 0.85,
    "grapefruit": 1.45,
    "kiwi": 2.70,
    "pineapple": 5.50,
    "grapes": 3.85
  };

  const WeekendPrices = {
    "banana": 2.70,
    "apple": 1.25,
    "orange": 0.90,
    "grapefruit": 1.60,
    "kiwi": 3.00,
    "pineapple": 5.60,
    "grapes": 4.20
  };

  let price

  if (Weekdays.includes(Day)) {
    price = WeekPrices[Food];
  } else if (Weekends.includes(Day)) {
    price = WeekendPrices[Food];
  }

  if (price !== undefined) {
    const TotalPrice = price * Quantity
    console.log(TotalPrice.toFixed(2));
  } else {
    console.log("error")
  }
}

FruitShop(["banana", "asdad", "33"])