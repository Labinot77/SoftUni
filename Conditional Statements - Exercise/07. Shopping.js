function Shopping(params) {
  let budget = Number(params[0]);
  let numVideoCards = Number(params[1]);
  let numProcessors = Number(params[2]);
  let numRam = Number(params[3]);

  let pricePerVideoCard = 250;
  let pricePerProcessor = pricePerVideoCard * 0.35;
  let pricePerRam = pricePerVideoCard * 0.10;

  let totalVideoCardsCost = numVideoCards * pricePerVideoCard;
  let totalProcessorsCost = numProcessors * pricePerProcessor;
  let totalRamCost = numRam * pricePerRam;
  let totalCost = totalVideoCardsCost + totalProcessorsCost + totalRamCost;
  
  if (numVideoCards > numProcessors) {
    totalCost *= 0.85 
  }

    if (totalCost <= budget) {
    let remainingMoney = budget - totalCost;
    console.log(`You have ${remainingMoney.toFixed(2)} leva left!`);
  } else {
    let neededMoney = totalCost - budget;
    console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva more!`);
  }
}