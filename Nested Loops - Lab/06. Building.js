function building(params) {
    let floors = Number(params[0]);
    let roomsPerFloor = Number(params[1]);
    
    
    for (floor = floors; floor > 0; floor--) { // * Use the floor-- to filter them from highest to losest.
        let result = ""
        for (room = 0; room <= roomsPerFloor ;room++) {
            if (floor === floors) {
                result += `L${floor}${room} `; // ! For the final floor where the appartments are large
            } else if (floor % 2 === 0) {
                result += `O${floor}${room} `; // ! For even number floors, where the the rooms are office
            } else {
                result += `A${floor}${room} `; // ! Floors numbers that are odd are normal appratments
            }
        }

        console.log(result);
    }
}

building(["61", "4"])