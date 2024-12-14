console.log('Hello World from Html'.toUpperCase());
console.log('Hello World from Html'.toLowerCase());
let a = 5; //value number: int, float, long, double
let b = 6;
let c = 5.5;
let d = "5"
console.log(a + b) // value will display 11
console.log(a + c) // value will display 10.5
console.log(a + d) // value will display 55 
// because number type + string type = string type
console.log(a * d) // value will display 25
console.log(a / d) // value will display 1
console.log(a - d) //value will display 0 
// math -, *, / when operation with string element, 
// js will try to convert value that become number and then newly made math 

// let e = Number(d); 
let e = +d; //way write short instead of write above
console.log("Value: ", e , "Type of:", typeof(e))