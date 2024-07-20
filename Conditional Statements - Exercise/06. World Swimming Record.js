function  WorldSwimmingRecord(params) {
 const WorldRecord = Number(params[0]);
 const Distance = Number(params[1]);
 const TimeFor1M = Number(params[2]);

 let SwimTime = TimeFor1M * Distance;
 let Slow = Math.floor(Distance / 15) * 12.5;
 
 SwimTime += Slow

 if (SwimTime < WorldRecord) {
  console.log(`Yes, he succeeded! The new world record is ${SwimTime.toFixed(2)} seconds.`)
 } else {
  let neededTime = SwimTime - WorldRecord
  console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
 }
}

WorldSwimmingRecord(["10464",
  "1500",
  "20"])