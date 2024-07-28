function equalSumsEvenOddPosition(params) {
    const start = Number(params[0]);
    const end = Number(params[1]);
    let result = '';

    for (number = start; number <= end; number++) {
        const numString = number.toString();
        let even = 0;
        let odd = 0;

        for (index = 0; index < numString.length; index++) {
            const char = Number(numString[index]);
            if (index % 2 === 0) {
                even += char;
            } else {
                odd += char;
            }
        }

        if (even === odd) {
            // result.push(number) // When using push it creates an ARRAY where each number is an individual element. Pushed can only be used for ARRAY
            result += `${number} ` // This just creates a string of numbers.
        }
    }

    if (result.length > 0) {
        console.log(result);
    }
}


equalSumsEvenOddPosition([100000, 100050])