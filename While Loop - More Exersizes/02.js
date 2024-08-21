function charityEvent(input) {
  let targetAmount = Number(input[0]);
  let paymentIndex = 0;
  let i = 1;

  let count = {
    cardCount: 0,
    cashCount: 0,
  };

  let payments = {
    cardPayments: 0,
    cashPayments: 0,
  };

  while (i < input.length) {
    let command = input[i];

    if (command === "End") {
      console.log("Failed to collect required money for charity.");
      break;
    }

    let productPrice = Number(command);
    let isCashPayment = paymentIndex % 2 === 0;

    if (isCashPayment) {
      if (productPrice > 100) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        payments.cashPayments += productPrice;
        count.cashCount++;
      }
    } else {
      if (productPrice < 10) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        payments.cardPayments += productPrice;
        count.cardCount++;
      }
    }

    let totalCollected = payments.cardPayments + payments.cashPayments;
    
    if (totalCollected >= targetAmount) {
      let averageCash = (payments.cashPayments / count.cashCount).toFixed(2);
      let averageCard = (payments.cardPayments / count.cardCount).toFixed(2);

      console.log(`Average CS: ${averageCash}`);
      console.log(`Average CC: ${averageCard}`);
      break;
    }

    paymentIndex++;
    i++;
  }
}

// Пример за изпълнение:
charityEvent(["500", "120", "8", "63", "256", "78", "317"]);
// charityEvent(["600", "86", "150", "98", "227", "End"]);
