//for null
console.log(null >= 0);
console.log(null == 0);
console.log(null > 0);

//for undefined
console.log(undefined = 0)
console.log(undefined >= 0)
console.log(undefined > 0)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack memory
let name = "satyam"

let anotherName = name;
anotherName = "shivam"
console.log(anotherName);


//Heap memory

let user1 = {
    email: "user1@example.com",
    upi: "gpay@oksbi"
}

let user2 = user1
user2.email = "user2@example.com"

console.log(user1.email);
console.log(user2.email); 

//Both shows same email as on line no. 30 beacause of reference


