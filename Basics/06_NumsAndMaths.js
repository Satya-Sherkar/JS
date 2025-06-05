const score = 450;
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.4945
console.log(otherNumber.toPrecision(4));

const hundreds = 400000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);  // an object
console.log(Math.abs(-765));  // gives positive number every time
console.log(Math.round(432.242));  // round off the number 
console.log(Math.ceil(54.12));  // round off the number to highest possible value
console.log(Math.floor(54.92));  // round off the number to lowest possible value
console.log(Math.min(54, 56,878, 13, 65));  // gives lowest value
console.log(Math.max(54, 651, 354, 54, 687, 673));  // gives highest value

console.log(Math.random()); // gives a random number between 0 and 1

console.log(Math.floor((Math.random() * 10)) + 1 );

// random value between a range
const min = 1
const max = 12
console.log(Math.floor(Math.random() * (max - min + 1) + min));






