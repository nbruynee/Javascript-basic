console.log(`Hello Js`)

//----------------------------------------------------------------------------------------------------------
// for(initialize(khởi tạo) value, check condition, execute (thực hiện, thực thi) increment value base on condition)
// for (let i = 1; i <= 10; i++ ) {
//      code block to be executed 
// } called code block 
for (let i = 1; i <= 10; i++ ) {
    console.log(`Check variable i: ${i}`)
}

let arr = ['Mu', 'Toteham', 'Mancity', 'Liver']
for (let i = 0; i < arr.length; i++) {
    console.log(`Check variable i: ${arr[i]}`)
}

//----------------------------------------------------------------------------------------------------------
// i++ ===  i = i + 1 (assign -> increment: tăng dần)
// ++i === (increment -> assign)
let l = 1;
let k = l++;
// It will show result is: l = 2, k = 1 because it will assign value of l before and after increase value 
console.log(`l is: ${l} and k is: ${k}`)

let o = 1;
let j = ++o;
// It will show result is: l = 2, j = 2 because it will increment value of l before and after assign value into j
console.log(`l is: ${l} and j is: ${o}`)

//----------------------------------------------------------------------------------------------------------
// if console.log to show variable i, it will notify error is i undefined
// should use let more var. 
// In terms of scope, var is used globally or in functions, use Block scope {}.
//  In terms of re-declaration, var allows, let does not. In terms of loops, using let is safer than var.
// console.log(`Check variable i: ${i}`)