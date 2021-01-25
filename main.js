//==================================Raw Costs====================================//

const metals = [
    { metal: "Sterling Silver", price: 12.42 },
    { metal: "14K Gold", price: 736.4 },
    { metal: "24K Gold", price: 1258.9 },
    { metal: "Platinum", price: 795.45 },
    { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
    { carets: 0.5, price: 405 },
    { carets: 0.75, price: 782 },
    { carets: 1, price: 1470 },
    { carets: 1.5, price: 1997 },
    { carets: 2, price: 3638 }
]

const ringStyles = [
    { style: "Classic", price: 500 },
    { style: "Modern", price: 710 },
    { style: "Vintage", price: 965 }
]

//==================================Factory Function====================================//

const createCustomRing = (style, carets, metal) => {
    return {
        style: style.style,
        carets: carets.carets,
        metal: metal.metal,
        price: style.price + carets.price + metal.price
    }
}



const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2]);

// console.log(newRingOrder);


//==================================Doctors====================================//

const createDoctor = (name, speciality, address) => {
    return {
        name: name,
        speciality: speciality,
        address: address
    }
}

// console.log(createDoctor("Bill", "hearts", "here"));

//==================================Music Row====================================//

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const genres = ["Country","Pop","Funk","Rap","Bluegrass"]

const createFunkArtist = (firstName, lastName, genre, age) => {
    const artist =  {
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        age: age
    } 
    jumpStopRecords.push(artist)
}
const createRapArtist = (firstName, lastName, genre, age) => {
    const artist =  {
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        age: age
    } 
    jumpStopRecords.push(artist)
}
const createCountryArtist = (firstName, lastName, genre, age) => {
    const artist =  {
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        age: age
    } 
    chattenRecords.push(artist)
}
const createBluegrassArtist = (firstName, lastName, genre, age) => {
    const artist =  {
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        age: age
    } 
    chattenRecords.push(artist)
}
const createPopArtist = (firstName, lastName, genre, age) => {
    const artist =  {
        firstName: firstName,
        lastName: lastName,
        genre: genre,
        age: age
    } 
    polarRecords.push(artist)
}