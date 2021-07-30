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
};

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

// Destructuring Objects
// In destrucuring, the order does not matter so you don't need to a space in between unlike destructuring objects

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

/* 
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