'use strict';

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