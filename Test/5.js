function everestClimb(input) {
  let days = 1; 
  let currentHeight = 5364;

  for (let i = 0; i < input.length; i += 2) {
      let rest = input[i];
      
      if (rest === "END") {
        break;
      }

      let meters = Number(input[i + 1]);

      if (rest === "Yes") {
          days++;
      }

      if (days > 5) {
          console.log("Failed!");
          console.log(currentHeight);
          return;
      }

      currentHeight += meters;

      if (currentHeight >= 8848) {
          console.log(`Goal reached for ${days} days!`);
          return;
      }
  }

  console.log("Failed!");
  console.log(currentHeight);
}
