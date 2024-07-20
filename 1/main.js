function forLoop() {
  for (i = 1; i <= 10; i++) {
    console.log("Countings", i);
  }
}

let dasada = Math.random(0, 100)

// forLoop();

function extractingGivenData(params) {
  // Loops thru the whole Input(Masiv) 
  for (i = 0; i < params.length; i++) {
    console.log(params[i])
  }

  // console.log(params[params.length - 1])
}
extractingGivenData([11, 333, 66, 321, 675, 7465, 1231, 12312, 12321])


// Concate znachi string + string


function hello() {
  console.log("Hello SoftUni")
}
hello()