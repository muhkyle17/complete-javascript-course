'use strict';

/* 
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

*/

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