function LunchBrake(params) {
  const Serial = params[0];
  const DurationOfSerial = Number(params[1]);
  const DurationOfBrake = Number(params[2]);

  const TimeForLunch = DurationOfBrake / 8
  const TimeForRest = DurationOfBrake / 4

  const FreeTime = DurationOfBrake - (TimeForLunch + TimeForRest)
  
  if (FreeTime >= DurationOfSerial) {
    const remainingTime = Math.ceil(FreeTime - DurationOfSerial);
    console.log(`You have enough time to watch ${Serial} and left with ${remainingTime} minutes free time.`)
  } else {
    const neededTime = Math.ceil(DurationOfSerial - FreeTime);
    console.log(`You don't have enough time to watch ${Serial}, you need ${neededTime} more minutes.`)
  }
}

LunchBrake(["Game of Thrones","60","96"])