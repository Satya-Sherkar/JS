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

// scope in nested functions, if-statements, loops
function one (){
    const username = 'satyam';

    function two() {
        const website = 'Youtube';
        console.log(username);
    }
    // console.log(website);  // can't be done 
    
    two()

}

one()

// concept of hoisting

addone(4)   
function addone(num){
    return num + 1;
}

addtwo(4) // can not be done ❌❌
const addtwo = function(num){
    return num + 2;
}