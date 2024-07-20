function OneNThree(params) {
  const num = Number(params[0]);

  for (i = 1; i <= num; i += 3) {
    console.log(i)
  }
}

OneNThree([7])