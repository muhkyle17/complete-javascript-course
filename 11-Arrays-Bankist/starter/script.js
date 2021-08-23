'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display the transcations made in and out
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//Display the total value of all transactions
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `$${balance}`;
};
calcDisplayBalance(account1.movements);

// Display the total incomes, total expenses and total interest
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `﹩${incomes}`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$${Math.abs(out)}`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interest}`;
};
calcDisplaySummary(account1.movements);

// Creates a username for each account contained within the accounts array
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name[0];
      })
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////
// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE Method - does not mutate the original array but gets the items for selection and use 
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Makes a shallow copy of the original array for use
console.log([...arr]);

// SPLICE Method - mutates the original array by deleting certain array elements 
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE Method - Using this mutates the array when you reverse it 
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse());
console.log(arr2);

// CONCAT Method - Used to concatenate two arrays but does not mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // Does the same thing as concatenating 

// JOIN Method - Used to join the array into a string and will be separate by whatever you specify within the parenthesis
console.log(letters.join(' - '));

// Always got to the documentation on the MDN to check for these methods and how to use them 

/////////////////////////////////////////////////
// Looping Arrays: ForEach Method 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const[i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------- FOR EACH --------');
// forEach is a higher order function that requires a callback function in order to tell it what to do 
// The forEach() method executes a provided function once for each array element.
// Order: (current element, current index, entire array)
movements.forEach(function(mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

/////////////////////////////////////////////////
// forEach with Maps and Sets

// With Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

// With Set 
const currenciesUnique = new Set (['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`)
})

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  // const dogsJuliaCorrected = [...dogsJulia];
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  
  const dogsBoth = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogsBoth);

  dogsBoth.forEach(function(dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old`);
    }
  })
}

checkDogs([3, 5, 2, 12, 17], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


///////////////////////////////////////
// Data Transformations with Map, Filter and Reduce 

// These methods are like for each but it allows you to apply something to that method
// Map returns a new array containing the results of applying an operation on all original array elements 
// Filter returns a new array containing the array elements that passed a specficied test condition - the filtered elements return a new array and all the unfiltered ones do not 
// Reduce boils all array elements down to one single value and the value gets returned  (e.g. adding all elements together)

///////////////////////////////////////
// The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
})

const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movements)
console.log(movementsUSD)
console.log(movementsUSDArrow);

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);

// const movementDescriptions = movements.map(function(mov, i, arr) {
//   if (mov > 0) {
//     return `Transaction ${i + 1}: You deposited ${mov}`
//   } else {
//     return `Transaction ${i + 1}: You withdrew ${Math.abs(mov)}`
//   }
// });

// OR

const movementDescriptions = movements.map( (mov, i) =>
  `Transaction ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
);

console.log(movementDescriptions);

///////////////////////////////////////
// Filter Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// This is more functional because you can chain the methods to do a lot of things to what you're trying to do 
console.log('------ Deposits ------')
const deposits = movements.filter(function (mov) {
  return mov > 0;
})
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}
console.log(depositsFor);

console.log('------ Withdrawals ------')
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(movements);
console.log(withdrawals);

const withdrawalsFor = []
for (const mov of movements) {
  if (mov < 0) withdrawalsFor.push(mov);
}
console.log(withdrawalsFor);

///////////////////////////////////////
// Reduce Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// acc - accumulator is like a snowball that accumulates all of the elements
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i + 1}: ${acc}`)
//   return acc + cur 
// }, 0);
const balance = movements.reduce( (acc, cur) => {return acc + cur }, 0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) {
  balance2 = balance2 + mov
}
console.log(balance2);

// Getting maximum value of the movements array with reduce method
const max = movements.reduce(function(acc,  mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0])
console.log(max);

*/

///////////////////////////////////////
// Coding Challnge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  let humanAge = 0;
  const humanAgeArr = [];

  ages.forEach(function(mov) {
    if (mov <= 2) {
      humanAge = 2 * mov;
      humanAgeArr.push(humanAge);
    } else if (mov > 2) {
      humanAge = 16 + mov * 4;
      humanAgeArr.push(humanAge);
    };
  });

  console.log(humanAgeArr)

  const adults = humanAgeArr.filter(function (mov) {
    return mov >= 18
  })

  console.log(adults);

  // const average = adults.reduce(function(acc, age, i, arr){
  //   return acc + age / arr.length
  // }, 0)

  //OR
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  //OR 
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length, 0
  );
  
  console.log(average);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


///////////////////////////////////////
// The Magic of Chaining Methods
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀


*/

const calcAverageHumanAge1 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]));
