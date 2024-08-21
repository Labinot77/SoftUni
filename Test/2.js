function footballTeam(params) {
  const shirtPrice = Number(params[0]);
  const targetPrice = Number(params[1]);

  let priceShorts = shirtPrice * 0.75;
  let priceSocks = priceShorts * 0.2;
  let priceShoes = (shirtPrice + priceShorts) * 2;

  let totalSum = shirtPrice + priceShorts + priceSocks + priceShoes;
  let discountedSum = totalSum * 0.85; // Price after discount

  if (discountedSum >= targetPrice) {
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${discountedSum.toFixed(2)} lv.`);
  } else {
    let difference = (targetPrice - discountedSum).toFixed(2);
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${difference} lv. more.`);
  }
}

footballTeam([25, 100]);
