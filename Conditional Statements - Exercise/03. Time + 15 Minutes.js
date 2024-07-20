function Time15Minutes(params) {
  let hours = Number(params[0]);
  let minutes  = Number(params[1]);

  minutes += 15;

  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  if (hours >= 24) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`)
  } else {
    console.log(`${hours}:${minutes}`)
  }
}

Time15Minutes(["1", "46"]);  // 2:01