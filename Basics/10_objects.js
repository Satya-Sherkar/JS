//objects in depth

const user = {}

user.name = "satyam"
user.email = "example@example.com"
user.id ="123abc"

console.log(user);

const regularUser = {
    fullName: {
        mhStyle: {
            firstname: "satyam",
            lastname: "sherkar"
        }
    }
}

//way to access object within object
console.log(regularUser.fullName.mhStyle.lastname);

// combining two objects
obj1 = {1: "a", 2: "b"}
obj2 = {3: "c", 4: "d"}

obj3 = {...obj1, ...obj2}   // separate each element and combine in a new object

obj4 = Object.assign({},/*target*/obj1, obj2/*sources*/)

console.log(obj3, obj4);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('email'));



