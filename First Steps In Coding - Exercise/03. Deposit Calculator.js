function DepositCalculator(params) {
  let depositAmount = Number(params[0]);
  let termOfDeposit = Number(params[1]);
  let annualInterestRate = Number(params[2]);

  let compoundedInterestRate = depositAmount * (annualInterestRate / 100) // Divide by 100 because its in % 
  let monthlyInterestRate = compoundedInterestRate / 12
  
  let totalAmount = depositAmount + termOfDeposit * monthlyInterestRate

  console.log(totalAmount)
  
}

DepositCalculator(["200", "3", "5.7"])