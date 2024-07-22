// function sumNumbers(params) {
//   let sum = 0;

//   for (i = 1; i < params.length; i++) {
//     sum += Number(params[i]);
    
//     if (sum >= Number(params[0])) {
//       console.log(sum);
//     }
//   }

// }

// ! Right way to complete the question because I am supposted to use a while loop.
function sumNumbers(params) {
  let sum = 0;
  let i = 1;

  while (sum < params[0]) {
    sum += Number(params[i]);
    i++
  }

  console.log(sum);
}

sumNumbers(["100",
  "10",
  "20",
  "30",
  "40"])
  