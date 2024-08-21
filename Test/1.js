function Journey(params) {
  const peopleInGroupCount = Number(params[0]);
  const nightsCount = Number(params[1]);
  const transportCardsCount = Number(params[2]);
  const ticketsForMuseumCount = Number(params[3]);

  const nights = nightsCount * 20;
  const transportCards = transportCardsCount * 1.60;
  const ticketsForMuseum = ticketsForMuseumCount * 6;

  const totalPrice = nights + transportCards + ticketsForMuseum;
  const totalPriceForTheWholeGroup = totalPrice * peopleInGroupCount;

  const priceAfterUnexpectedNeeds = totalPriceForTheWholeGroup * 1.25;

  console.log(priceAfterUnexpectedNeeds.toFixed(2))

}

Journey([20,
  14,
  30,
  6])