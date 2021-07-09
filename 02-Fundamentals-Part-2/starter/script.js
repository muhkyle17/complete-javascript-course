'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


// Functions is a piece of code that we can reuse over and over again in our code 
// It's a little bit like a variable but for whole chunks of code 
// A varaible holds a value but a function can hold one or more complete lines of code 
// Think of functions as a processor -> We put food into the processor then the processor does something to our food (function body) then in the end, the food processor returns the processed food (like juice or something)

function logger() {
    console.log('My name is Mikyle'); // function body
}

logger(); // invoking, running or calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juices = (apples + oranges) * apples * oranges
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    console.log(juices); P
    return juice;
    // This juice will become the result of executing this function
}

const appleJuice = fruitProcessor(5, 0); 
// These parameters are called arguments and will assign them to the parameters of the fruitProcessor function 
// Storing them in the appleJuice variable will allow you to log it to the console 
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// *** Function Declarations can be called or invoked before it is defined while Function Expressions cannot 

// Function Declaration 
function calcAge1(birthYear) {
    // const age = 2037 - birthYear;
    // return age;
    //Simple written: 
    return 2037 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1)

// Function Expression 
const calcAge2 = function (birthYear) {
    return 2038 - birthYear;
}
const age2 = calcAge2(1996);
console.log(age2);

console.log(age1, age2);

// Arrow Functions
const  calcAge3 = birthYear => 2039 - birthYear; 
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2039 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3)); // This will call the fruitProcessor function and the cutFruitPieces function

////////////////////////////////////////////////////////

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0 ) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    
    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1996, 'Mikyle'));
console.log(yearsUntilRetirement(1950, 'Mike'));


////////////////////////////////////////////////////////

const friends = ['Michael', 'Steven', 'Peter'];
const y = new Array(1991, 1983, 2008, 2020);

console.log(friends);
console.log(friends[0], friends[1]);
console.log(y[0]);

console.log(friends.length);
console.log(y.length);

// These two console.logs are a way to access the last element of each array 
console.log(friends[friends.length - 1]);
console.log(y[y.length - 1]);

// This is a way to replace elements in an array
// You can only change individual values of each array but you cannot assign a new array to the friends array since there is a const 
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]) ];
console.log(ages);

const ages2 = [age1, age2, age3];
console.log(ages2);



//// Array Methods

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements 
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Removes the last element;
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Removes the first element of the array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

//// Objects

const jonasArray = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

*/

// Dot vs. Bracket Notation to retrieve data in objects 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName); // Dot Notation
console.log(jonas['lastName']); // Bracket Notation 

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends')
}