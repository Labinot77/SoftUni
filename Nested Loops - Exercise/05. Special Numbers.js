function specialNumber(params) {
    const n = Number(params[0]);
    let result = '';

    for (num = 1111; num < 9999;num++) {
        const numString = num.toString()
        let isSpeacialNumber = true; // Initially every number is special
        // ! a Special number is a number which divides without leftout. 
        
        for (char of numString) {
            const digit = Number(char);
            if (n % digit !== 0) {
                isSpeacialNumber = false;
                break;
            }
        }

        if (isSpeacialNumber) {
            result += `${num} `
        }
    }

    console.log(result);
}

specialNumber([32])