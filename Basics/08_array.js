// arrays

// let ListOfBoys = [ "viraj", "atharv", "rudra", "adhira"]

// console.log(ListOfBoys.length);
// ListOfBoys.push("virat");

// console.log(ListOfBoys[2]);

// ListOfBoys.pop();
// console.log(ListOfBoys);

let marvelHeros = ["IronMan", "Thor", "Hulk"]

let DCHeros = ["Batman", "Superman", "Flash"]

//let multiverse = marvelHeros.concat(DCHeros)  // .concat combines two arrays and returns an array
//console.log(multiverse);

const AllNewHeros = [...DCHeros, ...marvelHeros]  //spreads all elements and combines
//console.log(AllNewHeros);

const crazyArray = [1, 2, 3, [12, 56, 135], 4, 5, [2, 8, [5,3]]]
const goodArray = crazyArray.flat(Infinity)

console.log(goodArray);




