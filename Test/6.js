function Substitute(params) {
  const K = Number(params[0]);
  const L = Number(params[1]);
  const M = Number(params[2]);
  const N = Number(params[3]);

  let validSubstitutions = 0;

  for (let firstDigit1 = K; firstDigit1 <= 8; firstDigit1++) {
    if (firstDigit1 % 2 !== 0) continue;

    for (let secondDigit1 = 9; secondDigit1 >= L; secondDigit1--) {
      if (secondDigit1 % 2 === 0) continue; 

      for (let firstDigit2 = M; firstDigit2 <= 8; firstDigit2++) {
        if (firstDigit2 % 2 !== 0) continue;

        for (let secondDigit2 = 9; secondDigit2 >= N; secondDigit2--) {
          if (secondDigit2 % 2 === 0) continue; 

          let number1 = `${firstDigit1}${secondDigit1}`;
          let number2 = `${firstDigit2}${secondDigit2}`;

          if (number1 === number2) {
            console.log("Cannot change the same player.");
          } else {
            console.log(`${number1} - ${number2}`);
            validSubstitutions++;
          }

          if (validSubstitutions === 6) return; 
        }
      }
    }
  }
}

Substitute([7, 8, 8, 5]);


// const [asdasd, asdasdas] = useState({
// firstname: '',
// didIshit: false,
// })


// Made the notepad cloud website https://ibb.co/hDn6FZ0
// Integrate a slider for meth cooking proccess with strain, and purity,
// Use the leaked customs to combine your mechanic UI
// Create a 4.0 Inspired Laptop

// Tendencies -- склонност
// exceeds == надвишава
// anxiety -- безпокойност
// увереност - confidencce
// concise -- сбит
// excessive -- прекомерено
// allocate == разпределят
// willing - желая
// humility - смирение
// complaciecy == самодоволство
// novelty - новост
// relative -- относителен
// thrive -- процъфтявам
// sollitude - уединение
// settle - настанявам
// stagnant -- в застой.
// acquaintance -- запознат.
// tangible -- материален
// conundrum -- загатка
// interpret -- тълкувам  

// TED - Trial - ERROR ( Get expirience right after learning something) - Document (Write down where you struggled in the Error phase) 

// If you feel like you are stuck. Always take the time to realise that you made things happend. That you took action and that resulted in something whether its negative or positie. For instance, you wake and make your bed, clean your room, go outside to get sunligth. After all these things realise that YOU put the effort and that resulted in feeling more energized thru the day and more organized from the morning. These little realisations will build a belief that you are in control of your density. 