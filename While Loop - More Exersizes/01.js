function Detergent(params) {
  let bottleOfDetergent = Number(params[0]);
  let detergentInMl = bottleOfDetergent * 750;
  let index = 1;
  let cycle = 0;
  let potCount = 0;
  let plateCount = 0;

  while (params[index] !== "End") {
    const dishes = Number(params[index]);
    cycle++;

    if (cycle % 3 === 0) {
      detergentInMl -= dishes * 15;
      potCount += dishes;
    } else {
      detergentInMl -= dishes * 5;
      plateCount += dishes;
    }

    if (detergentInMl < 0) {
      console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`);
      return;
    }

    index++;
  }

  console.log("Detergent was enough!");
  console.log(`${plateCount} dishes and ${potCount} pots were washed.`);
  console.log(`Leftover detergent ${detergentInMl} ml.`);
}

Detergent([2,55,32,66, "End"])