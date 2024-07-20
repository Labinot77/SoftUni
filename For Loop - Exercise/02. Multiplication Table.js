function multiplicationTable(params) {
  const num = Number(params[0]);

  for (i = 1; i <= 10; i++) {
    let total = i * num
    console.log(`${i} * ${num} = ${total}`)
  }
}

multiplicationTable([5])