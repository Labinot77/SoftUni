function Vacation(params) {
  let NumberOfPages = Number(params[0]);
  let Pages = Number(params[1]);
  let NumberOfDays = Number(params[2]);

  let TotalTime = NumberOfPages / Pages 
  let NeededHoursADay = TotalTime / NumberOfDays

  console.log(NeededHoursADay)
}

Vacation([212,20,2])