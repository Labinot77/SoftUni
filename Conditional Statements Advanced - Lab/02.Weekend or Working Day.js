function WeekendorWorkingDay(params) {
  const day = params[0];
  const workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekendDays = ["Saturday", "Sunday"];
  
  if (workingDays.includes(day)) {
    console.log("Working day") 
  } else if (weekendDays.includes(day)) {
    console.log("Weekend") 
  } else {
    console.log("Error")
  }
}

WeekendorWorkingDay(["Monday"]);  // Working day