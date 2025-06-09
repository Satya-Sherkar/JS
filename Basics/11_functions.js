// functions in JS

function greet(){
    console.log('hello'); 
}
greet()  // way to execute the function

function addTwoNumbers(num1, num2){
    return (num1 + num2) //after return function stops
}

const result = addTwoNumbers(7, 3)

console.log(`Addition is ${result}`)

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Satyam"))

function calculateCartPrice(...num1){  // here ... is called rest operator
    return num1
}


console.log(calculateCartPrice(200, 200, 300)); //returns an array

const user = {
    username: "satya",
    Id: '123abc'
}

function handleObject(objectName){
    console.log(`Username is ${objectName.username} and Id is ${objectName.Id}`);
    
}

// handleObject(user)

// Directly passing the object
handleObject({
    username: "sam",
    Id: '456'
})

const MyArray = [1, 2, 3, 4 ]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(MyArray));


