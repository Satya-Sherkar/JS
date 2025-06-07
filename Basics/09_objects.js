const mySym = Symbol ("Key1")

let JsUser = {
    [mySym]: "MyKey1", // syntax to use symbols in object
    name: "Satyam",
    age: 24,
    email: "satyasherkar@example.com",
    isLoggedIn: true,
    FavGames:["Volleyball", "Chess", "Badminton"]
}

console.log(JsUser.FavGames);
console.log(JsUser["email"]);  // good syntax to access property of object
console.log(JsUser[mySym]);   // syntax to access symbol from object

JsUser.email = "satyam@google.com"  // to change the values of object
Object.freeze(JsUser)  // object cannot be modified now

console.log(JsUser);

JsUser.greetings = function(){
    console.log(`hello ${this.name}`);   // string interpolation   
}

console.log(JsUser.greetings());




