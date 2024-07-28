function sumOfTwoNumbers(params) {
    const start = Number(params[0]);
    const end = Number(params[1]);
    const result = Number(params[2]);

    let combinationCount = 0;
    let found = false;

    for (x = start; x <= end; x++) {
        for (y = start; y <= end; y++) {
            combinationCount++
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

sumOfTwoNumbers(["88", "888", "2000"]);
