console.log(`Hello world from html`)

// global (toàn cục) 
// block (cục bộ) should use in block code and use let variable 

//-----------------------------------------------------------------------------------------
//let vs var
// hoisted: Declaration is hoisted (undefined value).
// Scope: Function scope or Global scope.
console.log(`Variable a: ${a}`)
var a = 1;
console.log(`Variable a: ${a}`)
//-----------------------------------------------------------------------------------------
// Hoisted but not available before declaration.
// Block scope (in pairs of (cặp) {})
console.log(`Variable b: ${b}`)
let b = 2;


for(let i = 0; i < 10; i++) {
    console.log(`Show i: ${i}`);
}