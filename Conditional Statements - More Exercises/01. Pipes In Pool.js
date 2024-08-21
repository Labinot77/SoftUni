function pipesInPool(params) {
    const v = Number(params[0]);
    const p1 = Number(params[1]);
    const p2 = Number(params[2]);
    const n = Number(params[3]);

    const sumP1 = p1 * n;
    const sumP2 = p2 * n;
    const totalSumPipes = sumP1 + sumP2;

    if (totalSumPipes <= v) {
        console.log(`The pool is ${((totalSumPipes / v) * 100)}% full. Pipe 1: ${((sumP1 / totalSumPipes) * 100)}%. Pipe 2: ${((sumP2 / totalSumPipes) * 100)}%.`);
    } else {
        const overflow = totalSumPipes - v
        console.log(`For ${n} hours the pool overflows with ${overflow.toFixed(2)} liters.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);
