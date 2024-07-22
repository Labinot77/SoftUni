function coins(params) {
    let amount = Number(params[0]) * 100; // * Convering it to a value that can be compared
    const coins = [200, 100, 50, 20, 10, 5, 2, 1]; 
    let coinCount = 0;

    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin; 
            coinCount++; 
        }
    }

    console.log(coinCount); 
}



coins(["1.23"]); // Expected output: 4
coins(["2"]); // Expected output: 1
coins(["0.56"]); // Expected output: 3
coins(["2.73"]); // Expected output: 5