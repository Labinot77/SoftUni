function sequence2k1(params) {
  const n = Number(params[0]);
  let k = 1;

  while (k <= n) {
    console.log(k)
    k = 2 * k + 1;
  }
}

sequence2k1(["31"])