// function SpeedInfo(params) {
//   let Speed = Number(params[0]);

//   if (Speed <= 10) {
//     console.log("slow");
//   } else if (Speed >= 10 && Speed <= 50) {
//     console.log("average");
//   } else if (Speed >= 50 && Speed <= 150) {
//     console.log("fast") 
//   } else if (Speed => 150 && Speed <= 1000) { 
//     console.log("ultra fast")
//   } else {
//     console.log("extremely fast")
//   }
// }

function SpeedInfo(params) {
  let speed = Number(params[0]);

  const speedRanges = [
    { max: 10, message: "slow" },
    { min: 10, max: 50, message: "average" },
    { min: 50, max: 150, message: "fast" },
    { min: 150, max: 1000, message: "ultra fast" },
  ];

  for (let range of speedRanges) {
    if ((range.min === undefined || speed > range.min) && (range.max === undefined || speed <= range.max)) {
      console.log(range.message);
      return;
    }
  }

  console.log("extremely fast");
}
