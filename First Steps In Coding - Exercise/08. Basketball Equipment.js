function BasketballEquipment(params) {
  let AnnualFee = Number(params[0]);
  
  let BaseketballSneakers = AnnualFee * 0.60;
  let BaseketballOutfit = BaseketballSneakers * 0.80;
  let Basketball = BaseketballOutfit * 0.25;
  let accessoriesPrice = Basketball * 0.20;

  let TotalPrice  = AnnualFee + BaseketballSneakers + BaseketballOutfit + Basketball + accessoriesPrice;

  console.log(TotalPrice);
}

BasketballEquipment(["365"])