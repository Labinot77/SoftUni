function PersonalTitleJS(params) {
  const Age = Number(params[0]);
  const Pronoun = params[1];

  if (Age >= 16 && Pronoun === "m") {
    console.log("Mr.")
  } else if (Age <= 16 && Pronoun === "m") {
    console.log("Master")
  } else if (Age >= 16 && Pronoun === "f") {
    console.log("Ms.")
  } else {
    console.log("Miss")
  }
}

PersonalTitleJS(["17","m"])