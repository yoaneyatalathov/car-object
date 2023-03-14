let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passenger: 2,
    convertible: false,
    mileage: 1021
};

let cadi = {
    make: "Cadillac",
    model: "GM Cadillac",
    year: 1955,
    color: "tan",
    passenger: 5,
    convertible: false,
    mileage: 12892
};

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passenger: 2,
    convertible: false,
    mileage: 88000
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    } 
    return true;
}

let worthALook = prequal(taxi);
    if (worthALook) {
        console.log("You gotta check out this " + taxi.make + " " + taxi.model);
    } else {
        console.log("You should really pass on the " + taxi.make + " " + taxi.model);
    }