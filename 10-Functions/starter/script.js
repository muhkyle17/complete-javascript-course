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

*/

////////////////////// 
// Coding Challenge #1 

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]
    answers: new Array(4).fill(0),

    // Get Answer
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

    // Register Answer 
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++; 

    this.displayResults();
    this.displayResults('string');
    },

    displayResults(type = 'array') {
        // if an array, display it as an array
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // if a string, display it as a string with the phrase below 
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3] }, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]