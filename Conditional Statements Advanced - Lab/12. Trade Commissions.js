function CalculateCommission(params) {
  const city = params[0];
  const sales = Number(params[1]);
  let commission = null;

  const commissionRates = {
    Sofia: [
      { min: 0, max: 500, rate: 0.05 },
      { min: 500, max: 1000, rate: 0.07 },
      { min: 1000, max: 10000, rate: 0.08 },
      { min: 10000, max: Infinity, rate: 0.12 }
    ],
    Varna: [
      { min: 0, max: 500, rate: 0.045 },
      { min: 500, max: 1000, rate: 0.075 },
      { min: 1000, max: 10000, rate: 0.10 },
      { min: 10000, max: Infinity, rate: 0.13 }
    ],
    Plovdiv: [
      { min: 0, max: 500, rate: 0.055 },
      { min: 500, max: 1000, rate: 0.08 },
      { min: 1000, max: 10000, rate: 0.12 },
      { min: 10000, max: Infinity, rate: 0.145 }
    ]
  };

  if (sales < 0 || !commissionRates[city]) {
    console.log("error");
    return;
  }


  for (const range of commissionRates[city]) {
    if (sales > range.min && sales <= range.max) {
      commission = sales * range.rate;
      break;
    }
  }

  if (commission !== null) {
    console.log(commission.toFixed(2));
  }
}

