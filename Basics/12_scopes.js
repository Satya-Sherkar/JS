//scopes in js

//Global scope outside - {} of function, if-statement, loops, etc
let a = 10;
const b = 20;
var c = 30;

function example(){

    let a = 234; // Local scope - inside {} of function, if-statement, loops, etc
    console.log(a);
    console.log(b);
    console.log(c);
}
