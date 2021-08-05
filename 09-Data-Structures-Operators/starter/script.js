'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24
  },
};

// Data needed for a later exercise
// const flights =
  // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // ES6 enhanced object literals
  openingHours,


  // Enhanced Object Literals -- Can be written with or without the function keyword
  order (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery ( {starterIndex =1 , mainIndex = 0, time = '20:00', address} ) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  
};


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

/* 
///////////////////////////////////////
// Coding Challenge #4

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});


//////////////////////////////
// Working with Strings Part 3

// The split method helps you divide the string by passing an argument inside it to help divide it
console.log('a|very|cool|string'.split('|'));
console.log('Jonas Schedtmann'.split(' '));

// Same method but destructued in an array 
const [firstName, lastName] = 'Mikyle Reyes'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  console.log(names);
  const namesUpper = [];

  for(const capName of names) {
    // namesUpper.push(capName[0].toUpperCase() + capName.slice(1)); 
    // OR 
    namesUpper.push(capName.replace(capName[0], capName[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('mikyle reyes');

// Padding a string
// This means that you add a number of character to the string until the string has certain number of desired strings length
// First value is the total number of characters while the second value is the character that you want to add 
const message = 'Go to gate 23!';
console.log(message.padStart(25, '!').padEnd(30, '!'));
console.log('Jonas'.padStart(25, '!').padEnd(30, '!'));

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(2938458));
console.log(maskCreditCard(9823748284923879));
console.log(maskCreditCard(29834898924394893234));

// Repeat Method 
const message2 = 'Due to bad weather, all departures will be delayed \n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(50);

// ***** Search all string methods on mdn for future reference ******

//////////////////////////////
// Working with Strings Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('mikyle'.toUpperCase());
console.log('MIKYLE'.toLowerCase());

// Fix capitalization methods in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = 
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Fix capitalization in name in function to pass in any name with wrong capitalization
const correctName = function (name) {
  const wrongName = name;
  const nameLower = wrongName.toLowerCase();
  const nameCorrect = 
    nameLower[0].toUpperCase() + nameLower.slice(1);
  // console.log(nameCorrect);
  return nameCorrect;
}

// correctName('mIkyLe')
// correctName('ceLiNE');
console.log(correctName('mIkyLe'));
console.log(correctName('ceLiNE'));

// Comparing emails 
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Shorter version
const normalizedEmail = lowerEmail.toLowerCase().trim();
console.log(normalizedEmail);
if (email === normalizedEmail) console.log('You have the correct formatted email');

// Replace method parts of strings
// When using the replace method, the first argument you pass is the value you want to change and the second arugment you pass is the value you want to change it into
const priceGB = '£288,97'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // Uses regex

const door = 'All passengers come to boarding door 23. Boarding door 23!';
const gate = door.replaceAll('door', 'gate');
console.log(door);
console.log(gate);

// Return booleans methods 
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
} else {
  console.log(false);
}

// Practice exercise 
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome abord!`);
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks, and a gun for protection');


//////////////////////////////
// Working with Strings Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[1]);
console.log('B737'[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // This will look for the first r in the string
console.log(airline.lastIndexOf('r')); // This will look for the last r in the string
console.log(airline.indexOf('portugal'));

// 4 here will be the starting string and slice will EXTRACT and return the sub string for use but will not remove or mutate it 
console.log(airline.slice(4)); 
// 4 is the starting string to be sliced and 7 is the value ONE AFTER the end of the string that will be sliced so in essence: [4] - [6] = Air because it's 7 - 4 
console.log(airline.slice(4, 7)); 

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1 )); // + 1 because it will include the space 

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats in a plane
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log ('You got the middle seat 😥');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
checkMiddleSeat('100A');

// Despite methods being available for objects or arrays and not strings, JavaScript actually converts the strings into objects when methods are applied to them 
 // -> This is called boxing because it automatically convers the string into an object and puts it into a box where this becomes the objects
console.log(new String('jonas'));
console.log(typeof new String('jonas'));


//////////////////////////////
// Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.) 
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.) 
gameEvents.delete(64);
console.log(gameEvents);

// 3.) 
console.log(`An event happend, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happend, on average, every ${time / gameEvents.size} minutes`);

// 4.)
for (const [minute, event] of gameEvents) {
  const time = minute <= 45 ? 'FIRST' : 'SECOND'
  const firstHalf = minute <= 45;
  const secondHalf = minute > 45 && minute <= 100;

  if (firstHalf) {
    console.log(`[${time} HALF] ${minute}: ${event}`);
  } else if (secondHalf) {
    console.log(`[${time} HALF] ${minute}: ${event}`);
  }
}
// Shorter version 
console.log('----- SHORTER VERSION OF CODE -----');
for (const [minute, event] of gameEvents) {
  const time = minute <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${time} HALF] ${minute}: ${event}`);
}

//////////////////////////////
// Maps: Iteration

// In array maps, it works just the same - first position is the key while the second position is the value 
// When creating a new map from scratch, this is the better way to write it at first rather than writing rest.set method but when writing new elements into the map, then the rest.set method is still the better way to write it 
const question = new Map ([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],  
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//////////////////////////////
// Maps: Fundamentals
// A map is a data structure that we can use to map values to keys 
// In maps, the keys can have any type whereas objects are only always strings -> maps can have different kinds of keys like objects, arrays or other maps
// Structured in such a way that the first position is the key while the second position is the value

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 8;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

  const arr = [1, 2];
  console.log(rest.has('categories'));
  rest.delete(2);
  // rest.clear();
  // rest.set([1, 2], 'Test')
  rest.set(arr, 'Test');
  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest);
  console.log(rest.size);

  // console.log(rest.get([1, 2])); // This returns undefined because it is not the same as the key with the test value (as defined by the heap) 
  console.log(rest.get(arr));

//////////////////////////////
// Sets 

const ordersSet = new Set([
  'Pasta', 
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);


console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

// Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // [Waiter, Chef, Manager]
console.log(new Set (['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);


///////////////////////////////////////
// Coding Challenge #2

Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.) 
const scorers = [...game.scored];

for (const [i, el] of scorers.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// 2.) 
const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) 
average += odd;
average /= odds.length;
console.log(average);

// 3.) 
for (const [ team, odd ] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


/*

///////////////////////////////////////
// Looping Obects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours); // Object.keys method returns an array of a given object's own property names and is iterated in the same order that a normal loop would 
console.log(properties);

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr +=`${day}, `
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours); // Object.keys method returns an array of a given object's own property values and is iterated in the same order that a normal loop would 
console.log(values);

// Entire object
const entries = Object.entries(openingHours); // Object.keys method returns an array of a given object's own entire object and is iterated in the same order that a normal loop would 
console.log(entries);

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
} // contains destructuring 


///////////////////////////////////////
// Optional Chaining 

if (restaurant.openingHours && restaurant.openingHours.mon) 
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining with (?) -- shortcut to the code above
// If the condition before the (?) exists, then it will look for the property after the (?) but still connected to the chain itself
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open); // Multiple optional chaining 

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


for(const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}


// Methods with Optional Chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays with Optional Chaining
const users = [ {name: 'Jonas', email: 'hello@jonas.io'} ];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
// ----- Longer Version -----
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty')


///////////////////////////////////////
// For Of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// Entries adds the index number corresponsding to the item and puts it inside its own arrays 
for (const item of menu.entries()) {
  console.log(item);
}
//Output:
  // [0, "Focaccia"]
  // [1, "Bruschetta"]
  // [2, "Garlic Bread"]
  // [3, "Caprese Salad"]
  // [4, "Pizza"]
  // [5, "Pasta"]
  // [6, "Risotto"]

// Destructured [i, el]
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Output:
  // 1: Focaccia
  // 2: Bruschetta
  // 3: Garlic Bread
  // 4: Caprese Salad
  // 5: Pizza
  // 6: Pasta
  // 7: Risotto

// console.log([...menu.entries()]);


///////////////////////////////////////
// Coding Challenge #1

We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.)
const [players1, players2] = game.players;
console.log(...players1, ...players2);

// 2.) 
const [gk, ...fieldPlayers] = players1; 
console.log(gk, fieldPlayers);

// 3.) 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.) 
const 
  { team1, x: draw, team2}
 = game.odds;
console.log(team1, draw, team2);

// 6.) 
const printGoals = function (...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored`);
  console.log(`The goals scorers were ${players}`);
}
printGoals('Davies', ' Muller', ' Lewandowski', ' and Kimmich');
printGoals(...game.scored);

// 7.) 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 us more likely to win');

// Same as this
if (team1 < team2) {
  console.log('Team 1 is more likely to win');
} else {
  console.log('Team 2 is more likely to win');
};

//////////////////////////////////
// The Nullish Coalescing Operator

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish value: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//////////////////////////////
// Short Circuting (&& and ||)

console.log('------ OR ------')
// Logical operator properties: 
// 1.) Use ANY data type, 2.) return ANY data type, 3.) short-circuiting or short circuit evaluation 
console.log(3 || 'Jonas'); // if the first value is a truthy value, it will immediately return that value 
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------ AND ------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas'); 
// When the first value is falsy, it will stop evaluating and it will return the first value
// When the first value is truthy, it will keep evaluating and it will return the second value but if there are a lot then it will return the next falsy value

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// 1) DESTRUCTURING 
// SPREAD, because it's on the RIGHT  side of = sign
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because it's on the LEFT side of the = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);


// 2) Functions 
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) 
  sum += numbers[i];
  console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7]
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Spread operator using (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9
console.log(1, 2, 7, 8, 9); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]
console.log(...newMenu); // Pizza Pasta Risotto Gnocci

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ["Pizza", "Pasta", "Risotto"]

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]
console.log(...menu); // Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// Spread operater works on all iterables like arrays, strings, maps, and sets but not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]
console.log(...str); // J o n a s
// console.log(`${...str} Schmedtmann`); // unexpected token 


// Real world example
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`), 
  // prompt(`Ingredient 2?`), 
  // prompt(`Ingredient 3?`)
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); 
restaurant.orderPasta(...ingredients);

// Objects 
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


//////////////////////////////////////////
// Destructuring Objects
// In destrucuring, the order does not matter so you don't need to a space in between unlike destructuring objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery ({
  address: 'Via del Sole, 21',
  starterIndex: 1
})


const {name, openingHours, categories} = restaurant;
console.log(name);
console.log(openingHours);
console.log(categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; 
console.log(restaurantName)
console.log(hours);
console.log(tags);

// This assigns default values just like in arrays
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables 
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj); 
console.log(a, b);

// Nested Objects

const { 
  fri: {open: o, close: c} 
} = openingHours;
console.log(o, c);

//////////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(a, b, c);
console.log(x, y, z);

// In destructuring arrays, the order matters that's why we add a space in between 
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Normal way to switch the two variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables using destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);

//Receive 2 return values from a function 
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values 
// const [p, q, r] = [8, 9]
// console.log(p, q, r); // r will be undefined

const [p=1, q=1, r=1] = [8, 9]
console.log(p, q, r); 

*/