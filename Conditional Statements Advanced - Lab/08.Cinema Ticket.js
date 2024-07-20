function CinemaTicket(params) {
  const Day = params[0];
 
  const TicketPrices = {
    "Monday": 12,
    "Tuesday": 12,
    "Wednesday": 14,
    "Thursday": 14,
    "Friday": 12,
    "Saturday": 16,
    "Sunday": 16,
  }

  if (TicketPrices[Day]) {
    console.log((TicketPrices[Day]))
  } else {
    console.log("Error")
  }
}
CinemaTicket(["Monday"]); // Output: 12
CinemaTicket(["Friday"]); // Output: 12
CinemaTicket(["Sunday"]); // Output: 16