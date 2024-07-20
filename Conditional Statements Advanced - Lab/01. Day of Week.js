function DayOfWeek(params) {
  const dayNumber = Number(params[0]);
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  

  
  if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(daysOfWeek[dayNumber - 1])
  } else {
    console.log("Error")
  }
}

DayOfWeek([6])