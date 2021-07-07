var country = "Philippines"
console.log(country);
var continent = "Asia"
console.log(continent);
var population = 110000000
console.log(population);


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);



// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense || hasGoodVision && !isTired ) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive');
}