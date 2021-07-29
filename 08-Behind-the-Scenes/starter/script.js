'use strict';

/* 

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW variable with same name as outer score's variable
            const firstName = 'Steven';

            // Reassiging outer scope's variable; 
            output = 'NEW OUTPUT!';
        
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3)); -> will only work when not on strict modec
        console.log(output);
    }
    printAge();
    // console.log(millenial); -> will not work because too far from the if statement scope

    return age;
}
// printAge(); calling this function outside of the calcAge function will not work

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

*/

// Variable Hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Function Hoisting
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

// Lesson: The only way you can do hoisting for functions is to make the function a function declaration

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example 
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// JS Best Practices 

// 1. Dont use var to declare variables and use const to declare variables and let if you need to change the variable later 

//2. In order to write clean code, delcare your variables at the top of each scope, it will make the code look better

//3. Always all of your functions first and use them only after the declaration -> This apples to all types of functions even if function declarations are hoisted to write cleaner code 

var x = 1; 
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);