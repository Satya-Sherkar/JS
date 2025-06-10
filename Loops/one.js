// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j}`);
        console.log(i, '*' , j, '=', i*j );
    }   
}

let myArray = ['flash', 'batman', 'superman']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   console.log(element);
}


// break and continue

// break stops the iterations of the code
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        break
    }        
    console.log(`Value of index is ${index}`);
    
}

// continue stops the iteration for one time and then continues from next index
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        continue
    }        
    console.log(`Value of index is ${index}`);
    
}