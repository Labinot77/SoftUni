function vacationSavings(params) {
  const targetAmount = Number(params[0]);
  let currentAmount = Number(params[1]);
  let index = 2;
  let days = 0;
  let spendingDays = 0;

  while (currentAmount < targetAmount) {
    const action = params[index];
    const amount = Number(params[index + 1]);
    days++;
    
    if (action === "spend") {
      currentAmount -= amount;
      spendingDays++;

      if (currentAmount < 0) {
        currentAmount = 0;
      };

    } else if (action === "save") {
      currentAmount += amount;
      spendingDays = 0;
    }
    
    
    if (spendingDays === 5) {
      console.log("You can't save the money.");
      console.log(days);
      return;
    }

    index += 2;
  }

  console.log(`You saved the money for ${days} days.`);
}

// Example inputs
vacationSavings(["2000", "1000", "spend", "1200", "save", "2000"]);
// Expected output:
// You saved the money for 2 days.

vacationSavings([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
// // Expected output:
// // You can't save the money.
// // 5

vacationSavings([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
// // Expected output:
// // You saved the money for 4 days.
