'use strict';

/* 

////////////////////
// Default Parameters 
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers) {
    // Passing the numPassegers works because it is already defined, if it is not defined yet, then it won't work because JS won't know what it is yet 


    // ES5 way of making default parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); // This is a simple trick to skip the value you want to set as default 


////////////////////
// How Passing Arguments Work

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 23424092423
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 23424092423) {
        alert('Checked In')
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// This is the name as doing this except we're passing it into a function 
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// Javascript does not have pass by reference only by value 

///////////////////////
// First-Class and Higher-Order Functions 

// Higher-Order Functions --> Functions Accepting Callback Functions 

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order functions 
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}

// This callback function uses the upperFirstWord to pass into the transformer function (fn) where it will be used inside that function 
transformer('JavaScript is the best!', upperFirstWord); 
transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time 
const high5 = function() {
    console.log('👋🏼');
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
// forEach() method executes a provided functions once for each Array element 

////////////////////// 
// Functions returning functions 

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}
greetArr('Hello')('Mikyle');

const greetArr2 = greeting => name => console.log(`${greeting} ${name}`)
greetArr2('Hello')('World');

*/

////////////////////// 
// The Call and Apply Methods 

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: ()
    book: function(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        ); 
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

// Call Method 
// The call() method calls a function with a given this value and arguments provided individually.
const book = lufthansa.book;

// book(23, 'Sarah Williams'); // This does not work because the this keyword won't be working anymore
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX', 
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');

// Apply Method 
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object)
const flightData = [583, 'George Cooper'];
book.apply[swiss, flightData];
console.log(swiss);

book.call(swiss, ...flightData);

////////////////////// 
// The Bind Method
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams')

// This is called partial application where the bind method presets a parameter (23) to flightNum and calling it means we pass a name to the name function parameter 
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// Bind method with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
};
lufthansa.buyPlane(); // This is important becasue this calls the above function first and the this keyword will then apply to the function calling it - without it, the this keyword will pertain to the document.query selector because it doesn't since it will pertain to the function calling it which is the addEventListener function 
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)
);

//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23);
// Same as writing this -> addVat = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(23));
console.log(addVAT2(100));