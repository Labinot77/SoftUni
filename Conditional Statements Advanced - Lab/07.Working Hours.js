function WorkingHours(params) {
  const Hours = Number(params[0]);
  const Day = params[1];
  const WorkingDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (WorkingDays.includes(Day) && Hours >= 10 && Hours <= 18) {
    console.log("open");
  } else {
    console.log("closed")
  }
}