function TennisRanklist(params) {
  const tournamentsCount = Number(params[0]);
  let startingPoints = Number(params[1]);
  let totalPointsFromTournaments = 0;
  let wins = 0;

  const pointsPerTournament = {
    W: 2000,
    F: 1200,
    SF: 720
  }

  for (i = 2;i < tournamentsCount + 2;i++) {
    const place = params[i];
    console.log(place)
    totalPointsFromTournaments += pointsPerTournament[place]
    startingPoints += pointsPerTournament[place]

    if (place === "W") wins++;

    
  }

  console.log(`Final points: ${startingPoints}`) // total points
  console.log(`Average points: ${Math.floor(totalPointsFromTournaments / tournamentsCount)}`) // Average points from tournaments
  console.log(`${(wins / tournamentsCount * 100).toFixed(2)}%`) // Avarage procentage
}

TennisRanklist(["5","1400","F",
  "SF",
  "W",
  "W",
  "SF"])
  