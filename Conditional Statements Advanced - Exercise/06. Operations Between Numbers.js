function performOperation(params) {
  const N1 = Number(params[0]);
  const N2 = Number(params[1]);
  const operator = params[2];

  let result;
  let evenOrOdd;

  switch (operator) {
    case '+':
      result = N1 + N2;
      evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
      console.log(`${N1} + ${N2} = ${result} - ${evenOrOdd}`);
      break;
    case '-':
      result = N1 - N2;
      evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
      console.log(`${N1} - ${N2} = ${result} - ${evenOrOdd}`);
      break;
    case '*':
      result = N1 * N2;
      evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
      console.log(`${N1} * ${N2} = ${result} - ${evenOrOdd}`);
      break;
    case '/':
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        result = (N1 / N2).toFixed(2);
        console.log(`${N1} / ${N2} = ${result}`);
      }
      break;
    case '%':
      if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
      } else {
        result = N1 % N2;
        console.log(`${N1} % ${N2} = ${result}`);
      }
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}

// Example usage:
performOperation(["10", "12", "+"]); // 10 + 12 = 22 - even
performOperation(["123", "12", "/"]); // 123 / 12 = 10.25
performOperation(["112", "0", "/"]); // Cannot divide 112 by zero
performOperation(["10", "1", "-"]); // 10 - 1 = 9 - odd
performOperation(["10", "3", "%"]); // 10 % 3 = 1
performOperation(["10", "0", "%"]); // Cannot divide 10 by zero
performOperation(["7", "3", "*"]); // 7 * 3 = 21 - odd
