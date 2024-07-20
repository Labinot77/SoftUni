function FruitOrVegetable(params) {
  const Food = params[0];
  const fruit = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
  const vegetable = ["tomato", "cucumber", "pepper", "carrot"];

  if (fruit.includes(Food)) {
    console.log("fruit")
  } else if (vegetable.includes(Food)) {
    console.log("vegetable")
  } else {
    console.log("unknown")
  }
}