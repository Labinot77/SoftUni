function CharacterSequence(params) {
  const Word = params[0];

  for (i = 0;i < Word.length; i++) {
    console.log(Word[i]);
  }
}

CharacterSequence(["softuni"])