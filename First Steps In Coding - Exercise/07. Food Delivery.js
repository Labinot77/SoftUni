function FoodDelivery(params) { 
  let ChickenMenu = Number(params[0])
  let FishMenu= Number(params[1])
  let VegeterianMenu = Number(params[2])

  let ChickenOrder = ChickenMenu * 10.35
  let FishOrder = FishMenu * 12.40
  let VegeterianOrder = VegeterianMenu * 8.15
  let Delivery = 2.5

  let Order = ChickenOrder + FishOrder + VegeterianOrder 

  // Desert is 20% of the total order.
  let DesertOrder = Order * 0.20

  let TotalOrder = Order + DesertOrder + Delivery

  console.log(TotalOrder)
}

FoodDelivery([2,4,3])