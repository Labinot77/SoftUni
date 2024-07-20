function Cinema(params) {
  const Type = params[0];
  const Row = Number(params[1]);
  const Column = Number(params[2]);
  let income

  const Types = {
    Premiere: 12,
    Normal: 7.5,
    Discount: 5.0,
  }    

  if (Types[Type]) {
    income = Row * Column * Types[Type]
  }

  console.log(income.toFixed(2))
}