function accountBalance(params) {
  let totalBalance = 0;
  let i = 0;
  
  while (i < params.length) {
    let transaction = params[i];
    let amount = Number(transaction);
    
    if (transaction === "NoMoreMoney") {
      break;
    }
    
    if (amount < 0) {
      console.log("Invalid operation!")
      break;
    }

    console.log(`Increase: ${amount.toFixed(2)}`);
    totalBalance += amount;
    i++;
  }

  console.log(`Total: ${totalBalance.toFixed(2)}`);
}

accountBalance(["5.51", 
  "69.42",
  "100",
  "NoMoreMoney"])
  