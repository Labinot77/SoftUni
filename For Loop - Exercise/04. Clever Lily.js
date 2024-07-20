function cleverLilly(params) {
  const yearsOld = Number(params[0]);
  const priceOfWashingMachine = Number(params[1]);
  const pricePerToy = Number(params[2]);

  let moneySaved = 0;
  let toy = 0;
  let totalMoneyReceived = 0;
  let brotherMoney = 0;

  for (i = 1 ; i <= yearsOld; i++) {
    if (i % 2 === 0) {
      totalMoneyReceived += 10 * (i / 2);
      brotherMoney++ 
    } else {
      toy++
    }

    moneySaved = totalMoneyReceived + (toy * pricePerToy) - brotherMoney;

  }

  if (moneySaved >= priceOfWashingMachine) {
    console.log(`Yes! ${(moneySaved - priceOfWashingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceOfWashingMachine - moneySaved).toFixed(2)}`);
  }
}

cleverLilly(["10", "170.00", "6"]);
cleverLilly(["21", "1570.98", "3"]);