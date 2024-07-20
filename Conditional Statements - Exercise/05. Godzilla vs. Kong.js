function GodzilavsKong(params) {
  const Budget = Number(params[0]);
  const NumberOfStatists = Number(params[1]);
  const PriceOfUniform = Number(params[2]);

  let Decoration = Budget * 0.10 
  let TotalPriceOfUniform = PriceOfUniform * NumberOfStatists
  if (NumberOfStatists > 150) {
    TotalPriceOfUniform *= 0.90; // 10% отстъпка
  }
  let TotalBudget = Decoration + TotalPriceOfUniform


  if (TotalBudget > Budget) {
    let money = TotalBudget - Budget
    console.log("Not enought money!");
    console.log(`Wingard needs  ${Math.abs(money).toFixed(2)} leva more.`);
  } else {
    let money = Budget - TotalBudget
    console.log("Action!");
    console.log(`Wingard starts filming with ${Math.abs(money).toFixed(2)} leva left.`);

  }
}

GodzilavsKong(["100",
  "120",
  "55.5"])
  