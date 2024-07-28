function trainTheTrainers(params) {
    const juryCount = Number(params[0]);
    let index = 1;
    let totalAvarageGrade = 0;
    let presentationCount = 0;

    while (params[index] !== "Finish") {
        const presentationName = params[index++];
        let totalGrade = 0;

        for (i = 0; i < juryCount; i++) {
            const grade = Number(params[index++])
            totalGrade += grade;
        }

        const averageGrade = totalGrade / juryCount;
        totalAvarageGrade += averageGrade;
        presentationCount++;

        console.log(`${presentationName} - ${averageGrade.toFixed(2)}.`);
    }

    console.log(`Student's final assessment is ${(totalAvarageGrade / presentationCount).toFixed(2)}.`)
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "6.00", "5.66", "Finish"]);
