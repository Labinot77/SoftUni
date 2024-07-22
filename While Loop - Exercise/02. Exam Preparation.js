function examPreparation(params) {
  const maxNegativeGrades = params[0];
  let negativeGradesCount = 0;
  let lastProblem = '';
  let totalGrades = 0;
  let problemCount = 0;
  let index = 1;

  while (index < params.length) {
    const problemName = params[index];

    if (problemName === "Enough") {
      console.log(`Average score: ${(totalGrades / problemCount).toFixed(2)}`);
      console.log(`Number of problems: ${problemCount}`);
      console.log(`Last problem: ${lastProblem}`);
      return;
    }

    const grade = Number(params[index + 1]);
    totalGrades += grade;
    problemCount++;
    lastProblem = problemName
    
    if (grade <= 4) {
      negativeGradesCount++;

      if (negativeGradesCount >= maxNegativeGrades) {
       console.log(`You need a break, ${negativeGradesCount} poor grades.`);
       return;
      }
    }

      index+= 2;
    }

    console.log(`Average score: ${(totalGrades / problemCount).toFixed(2)}`);
    console.log(`Number of problems: ${problemCount}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
// Expected output:
// Average score: 5.25
// Number of problems: 4
// Last problem: Bus

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
// Expected output:
// You need a break, 2 poor grades.