function sumOfTwoNumbers(params) {
    const start = Math.min(Number(params[0]), Number(params[1]));
    const end = Math.max(Number(params[0]), Number(params[1]));
    const result = Number(params[2]);
    let combinationCount = 0;
    let found = false;
    
    
    for (x = start; x <= end; x++) {
        combinationCount++
        for (y = start; y <= end; y++) {
            if (x + y === result) {
                console.log(`Combination N:${combinationCount} (${x} + ${y} = ${result})`);
                found = true;
                break;
            }
        }

        if (found) break;
    };
    
    
    if (!found) {
        console.log(`${combinationCount} combinations - neither equals ${result}`);
    }
}

sumOfTwoNumbers(["5621", "321", "2000"]);
