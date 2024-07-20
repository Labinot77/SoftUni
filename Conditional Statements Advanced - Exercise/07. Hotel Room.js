function hotelRoom(params) {
  const month = params[0];
  const overnightStays = Number(params[1]);

  let pricePerOvernightStayInStudio
  let pricePerOvernightStayInApartment

  if (month === "May" || month === "October") {
    pricePerOvernightStayInStudio = 50;
    pricePerOvernightStayInApartment = 65;
  } else if (month === "June" || month === "September") {
    pricePerOvernightStayInStudio = 75.20;
    pricePerOvernightStayInApartment = 68.70;
  } else if (month === "July" || month === "August") {
    pricePerOvernightStayInStudio = 76;
    pricePerOvernightStayInApartment = 77;
  }

  let studioTotal = pricePerOvernightStayInStudio * overnightStays;
  let apartmentTotal = pricePerOvernightStayInApartment * overnightStays;

  if ((month === "May" || month === "October") && overnightStays > 14) {
    studioTotal *= 0.70; 
  } else if ((month === "May" || month === "October") && overnightStays > 7) {
    studioTotal *= 0.95; 
  } else if ((month === "June" || month === "September") && overnightStays > 14) {
    studioTotal *= 0.80; 
  }

  if (overnightStays > 14) {
    apartmentTotal *= 0.90;
  }

  console.log(`Apartment: ${apartmentTotal.toFixed(2)} lv.`);
  console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}


hotelRoom(["May", "15"]); // Apartment: 877.50 lv. Studio: 525.00 lv.
hotelRoom(["June", "14"]); // Apartment: 961.80 lv. Studio: 1052.80 lv.
hotelRoom(["August", "20"]); // Apartment: 