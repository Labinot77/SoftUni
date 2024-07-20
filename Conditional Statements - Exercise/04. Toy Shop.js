function toyShop(params) {
  let tripPrice = Number(params[0]);
  let puzzlesCount = Number(params[1]);
  let dollsCount = Number(params[2]);
  let bearsCount = Number(params[3]);
  let minionsCount = Number(params[4]);
  let trucksCount = Number(params[5]);

  let puzzlePrice = 2.60;
  let dollPrice = 3.00;
  let bearPrice = 4.10;
  let minionPrice = 8.20;
  let truckPrice = 2.00;

  let totalSales = (puzzlesCount * puzzlePrice) + (dollsCount * dollPrice) + (bearsCount * bearPrice) + (minionsCount * minionPrice) + (trucksCount * truckPrice);
  
  let totalToys = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

  if (totalToys >= 50) {
    totalSales *= 0.75;
  }

  let profit = totalSales * 0.90; // we use 0.9 instead of 0.10 so we can get the full amount, instead of the leftover

  let moneyLeft = profit - tripPrice;
  if (moneyLeft >= 0) {
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} lv needed.`);
  }
}
ToyShop(["40.8","20","25","30","50","10"])
  