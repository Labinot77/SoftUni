function Graduation(params) {
    let studentName = params[0];
    let totalGrades = 0;
    let gradeCount = 0;
    let failCount = 0;
    let currentGrade = 1;
    let index = 1;
    
    // ** Made it so it takes the classes dynamicly, deppending on the arrays length, instead of a locked number
    
    while (currentGrade <= params.length - 1) {
        let grade = Number(params[index]);
        
        if (grade < 4.00) {
          failCount++;
          console.log(`${studentName} has been excluded at ${currentGrade} grade`);
          return;
        }
        
        totalGrades += grade;
        gradeCount++;
        currentGrade++;
        index++;
    }

    console.log(`${studentName} graduated. Average grade: ${(totalGrades / gradeCount).toFixed(2)}`);
}

// Test cases

Graduation(["Mimi", 
  "5",
  "6",
  "5",
  "5",
  "5.32",
  "5.5",
  "5.43",
  "5"])
