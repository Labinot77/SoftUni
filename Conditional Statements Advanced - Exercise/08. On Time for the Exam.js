function onTimeForTheExam(params) {
  const examHour = Number(params[0]);
  const examMinutes = Number(params[1]);
  const arrivalHour = Number(params[2]);
  const arrivalMinutes = Number(params[3]);

  const examTimeInMinutes = examHour * 60 + examMinutes;
  const arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinutes;

  const timeDifference = arrivalTimeInMinutes - examTimeInMinutes;

  let status;
  if (timeDifference > 0) {
      status = "Late";
  } else if (timeDifference >= -30) {
      status = "On time";
  } else {
      status = "Early";
  }


  const absDifference = Math.abs(timeDifference);
  const hours = Math.floor(absDifference / 60);
  const minutes = absDifference % 60;

  if (status === "Late") {
    if (hours > 0) {
        console.log(`${hours}:${minutes.toFixed(2)} hours after the start`);
    } else {
        console.log(`${minutes} minutes after the start`);
    }
} else if (status === "Early") {
    if (hours > 0) {
        console.log(`${hours}:${minutes.toFixed(2)} hours before the start`);
    } else {
        console.log(`${minutes} minutes before the start`);
    }
}
}

onTimeForTheExam(["9", "30", "9", "50"]); // Late 20 minutes after the start
// onTimeForTheExam(["9", "00", "10", "30"]); // Late 1:30 hours after the start
// onTimeForTheExam(["10", "00", "10", "00"]); // On time
// onTimeForTheExam(["9", "00", "8", "30"]); // On time 30 minutes before the start
// onTimeForTheExam(["14", "00", "13", "55"]); // On time 5 minutes before the start
// onTimeForTheExam(["11", "30", "10", "55"]); // Early 35 minutes before the start
// onTimeForTheExam(["16", "00", "15", "00"]); // Early 1:00 hours before the start
// onTimeForTheExam(["11", "30", "8", "12"]); // Early 3:18 hours before the start
// onTimeForTheExam(["11", "30", "12", "29"]); // Late 59 minutes after the start

// NOT FINISHED