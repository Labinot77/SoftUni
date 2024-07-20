function InvalidNumber(params) {
  const Num = Number(params[0]);
  
  if (!((Num >= 100 && Num <= 200) || Num === 0)) {
    console.log("invalid");
  }
}