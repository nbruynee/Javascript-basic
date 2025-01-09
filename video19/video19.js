console.log(`Hello World from html`)

// review before lesson
// arrow function request has name = parameter => { block in code}
// let sum = (a,b) => {
//     return a + b; 
// }

// console.log(`Check sum: ${sum(1,2)}`)

//-------------------------------------------------------------------
// Called is method
let obj = {
    name: 'Bruyne',
    address: 'HCMC',
    getName: function() {
        return this.name;
    }
}
// it will show name is Bruyne 
console.log(`Object name is: ${obj.getName()}`)

//-------------------------------------------------------------------
// called is function
let obj1 = {
    name: 'Bruyne',
    address: 'HCMC',
    getName: () => {
        return this.name;
    }
}
// it will show undefined value
console.log(`Object name is: ${obj1.getName()}`)

// function vs method => common(cùng) purpose reuse 
// Function → Free (Free means it can be anywhere, no need to be in an object or class)
// function will call directly(trực tiếp)
// -----------------------------------------------------------------------------------------------
// Method → Member (A member of an object or class)
// method will Call through(thông qua, băng qua) object (object.method())