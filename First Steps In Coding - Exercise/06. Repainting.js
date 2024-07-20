function Repaint(params) {
  let NeededAmountOfNylon = Number(params[0]);
  let NeededAmountOfPaint = Number(params[1]);
  let NeededAmountOfThinner = Number(params[2]);
  let WorkingHours = Number(params[3]);

  let Paint = (NeededAmountOfPaint * 1.10) * 14.50;
  let Nylon = (NeededAmountOfNylon + 2) * 1.5;
  let Thinner = NeededAmountOfThinner * 5;

  let SumOfAllMaterials = Paint + Nylon + Thinner + 0.40;
  let HourlyWage = (SumOfAllMaterials * 0.3) * WorkingHours;
  let totalAmount = SumOfAllMaterials + HourlyWage;

  console.log(totalAmount);
}

Repaint(["10", "11", "4" ,"8"])