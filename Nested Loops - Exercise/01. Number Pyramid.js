function numberPyramid(params) {
    const n = Number(params[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (rows = 1; rows <= n; rows++) {
        for (cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++
        }

        console.log(printCurrentLine);
        printCurrentLine = "";

        if (isBigger) {
            break;
        }
    }
}

numberPyramid([9])