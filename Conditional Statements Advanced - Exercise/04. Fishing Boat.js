function FishingBoat(params) {
  const Budget = Number(params[0]);
  const Season = params[1];
  const FisherMan = Number(params[2]);

  const SeasonTable = {
    "Spring": { rent: 3000 },
    "Winter": { rent: 2600 },
    "Summer": { rent: 4200 },
    "Autumn": { rent: 4200 },
  }

  const Discounts = [
    {threshhold: 6, discount: 0.10},
    {threshhold: 11, discount: 0.15},
    {threshhold: Infinity, discount: 0.25},
  ]


  let discount = Discounts.find((i) => FisherMan <= i.threshhold).discount; // Basicly work like a map where you give a name for each((i) =>) and after that you descripbe the conditions that you want to be met. The .discount after the brackets return the discount.
  let PriceWithDiscount = SeasonTable[Season].rent * (1 - discount)

  if (Season !== "Autumn" && FisherMan % 2 === 0) {
    PriceWithDiscount *= 0.95;
  }

  if (Budget >= PriceWithDiscount) {
    const price = Budget - PriceWithDiscount;
    console.log(`Yes! You have ${price.toFixed(2)} leva left.`);
  } else {
    const price = PriceWithDiscount - Budget
    console.log(`Not enough money! You need ${price.toFixed(2)} leva.`)
  }
}

FishingBoat(["3000", "Summer", "11"]);  // Output: Not enough money! You need 570.00 leva.
FishingBoat(["3600", "Autumn", "6"]);   // Output: Not enough money! You need 180.00 leva.
FishingBoat(["2000", "Winter", "13"]);  // Output: Yes! You have 50.00 leva left.
FishingBoat(["4000", "Spring", "4"]);  