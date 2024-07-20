function evenPowersOfTwo(params) {
  const n = Number(params[0]);
  
  for (let i = 0; i <= n; i += 2) {
    console.log(2 ** i);
  }
}
evenPowersOfTwo([4])