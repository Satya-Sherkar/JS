// forIn loop

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);   
}

const programming =['js', 'rb', 'py', 'java']

for (const key in programming) {
   console.log(programming[key]);
}

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States ofAmerica')
map.set('FR', 'France')

for (const key in map) {
    console.log(key);
} /* maps can not be iterated using for-in loop */

