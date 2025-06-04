const name = "satyam"

const score = 123

console.log(`My name is ${name} and my score is ${score}`); //string interpolation

console.log(name.toUpperCase());

console.log(name.indexOf(`t`));

console.log(name.charAt(3));

const dataWithSpaces = "     theName    "

console.log(dataWithSpaces);
console.log(dataWithSpaces.trim())  //trims unneccesary spaces before and after

const url = "https:google.com/satyam%20sherkar"

console.log(url.replace('%20', '-'))  //to replace particular keyword

console.log(url.includes('sherkar'));  //to check wether particular word is there, rerturns boolean




