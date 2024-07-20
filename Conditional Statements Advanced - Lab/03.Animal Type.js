function AnimalType(params) {
  const Animal = params[0];
  const mammal = ["dog"];
  const reptile = ["crocodile", "tortoise", "snake"];

  if (mammal.includes(Animal)) {
    console.log("mammal");
  } else if (reptile.includes(Animal)) {
    console.log("reptile");
  } else {
    console.log("unknown");
  }
}

AnimalType(["asdadad"])