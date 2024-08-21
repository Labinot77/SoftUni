function combination(params) {
    const finalNumber = Number(params[0]);
    let validCombinationsCount = 0;
  
    for (x = 0; x <= finalNumber; x++) {
     for (y = 0; y <= finalNumber; y++) {
      for (z = 0; z <= finalNumber; z++) {
          if (x + y + z === finalNumber) {
            validCombinationsCount++
          }
        }
      }
    }
  
    console.log(validCombinationsCount);
}