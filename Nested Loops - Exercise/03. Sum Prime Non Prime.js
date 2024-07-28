function sumPrimeNonPrime(params) {
  let primeSum = 0;
  let nonPrimeSum = 0;

  for (index = 0; index < params.length; index++) {
    const command = params[index];

    if (command === "stop") {
      break;
    }

    const number = Number(params[index]);

    if (number < 0) {
      console.log("Number is negative");
      continue;
    }

    function isPrime(number) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    
    if (isPrime(number)) {
      primeSum += number;
    } else {
      nonPrimeSum += number;
    }
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
