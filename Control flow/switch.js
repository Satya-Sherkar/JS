//basic syntax of switch 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

// select and press shift + alt + ↓ key to copy same code down the line
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}