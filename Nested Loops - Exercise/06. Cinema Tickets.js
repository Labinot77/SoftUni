function calculateTicketStats(input) {
    let index = 0;
    let command = input[index++];
    
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    
    while (command !== "Finish") {
        let movieName = command;
        let availableSeats = Number(input[index++]);
        let soldTickets = 0;
        
        let ticketType = input[index++];
        
        while (ticketType !== "End") {
            soldTickets++;
            totalTickets++;
            
            if (ticketType === "student") {
                studentTickets++;
            } else if (ticketType === "standard") {
                standardTickets++;
            } else if (ticketType === "kid") {
                kidTickets++;
            }
            
            if (soldTickets >= availableSeats) {
                break;
            }
            
            ticketType = input[index++];
        }
        
        let occupancyRate = (soldTickets / availableSeats * 100).toFixed(2);
        console.log(`${movieName} - ${occupancyRate}% full.`);
        
        command = input[index++];
    }
    
    let studentPercentage = (studentTickets / totalTickets * 100).toFixed(2);
    let standardPercentage = (standardTickets / totalTickets * 100).toFixed(2);
    let kidPercentage = (kidTickets / totalTickets * 100).toFixed(2);
    
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentPercentage}% student tickets.`);
    console.log(`${standardPercentage}% standard tickets.`);
    console.log(`${kidPercentage}% kids tickets.`);
}

// Example usage:
calculateTicketStats([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);

