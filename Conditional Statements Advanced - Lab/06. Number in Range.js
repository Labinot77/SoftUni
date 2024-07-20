function NumberInRage(params) {
  const Num = Number(params[0]);

  if (Num >= -100 && Num <= 100 && Num !== 0) {
    console.log('Yes')
  } else {
    console.log("No")
  }
}