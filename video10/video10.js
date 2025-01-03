console.log('Hello world from js ')
const a = 5 
const b = '5'
console.log(`Compare a == b, a = ${a}, b = ${b}, Result = ${a == b} `)
console.log(`Compare a === b, a = ${a}, b = ${b}, Result = ${a === b} `)
// === : type, value
// == : value
// Coding conventions (qui luật code)

// Empty, Null, undefined
// undefined
// in this case, I already declare c but I don't assign value for it, so it will show that undefined  
let c; 
console.log(`Check value c: ${c}`)

// empty 
let d = {};
console.log(`Check value d: `, d)
// null
let e = null; 
console.log(`Check value e: ${e}`)
// difference between empty and null value
// null relate to memory of computer, declaring a null value will not save memory, but empty will do the opposite.
let f = '';
f = 5;
f = ['55']
console.log(f)
