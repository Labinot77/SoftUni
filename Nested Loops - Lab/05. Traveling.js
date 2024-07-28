function traveling(params) {
    let index = 0;

    while (index < params.length) {
        let destination = params[index++];
        
        if (destination === "End") {
            break;
        }

        let budget = Number(params[index++])
        let moneySaved = 0;

        while (moneySaved < budget) {
            moneySaved += Number(params[index++]);
        }

        console.log(`Going to ${destination}!`);
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
