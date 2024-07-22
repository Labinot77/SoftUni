function oldBooks(params) {
  const favBook = params[0];
  let booksChecked = 0;
  let index = 1;

  while (index < params.length) {
    let nextBook = params[index]
    if (nextBook === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${booksChecked} books.`);
      return;
    }

    if (nextBook === favBook) {
      console.log(`You checked ${booksChecked} books and found it.`);
      return;
    }

    booksChecked++
    index++
  }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
// Expected output: You checked 2 books and found it.

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
// Expected output:
// The book you search is not here!
// You checked 4 books.

oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);
// oldBooks output: You checked 10 books and found it.