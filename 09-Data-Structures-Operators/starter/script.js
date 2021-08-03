'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ( {starterIndex =1 , mainIndex = 0, time = '20:00', address} ) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },
  
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  
};


/*

///////////////////////////////////////
// Coding Challenge #1

/* 
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
*/



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