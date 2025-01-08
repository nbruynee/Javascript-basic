console.log(`Hello World from HTML`)

// single/double quote (nháy đơn/kép) , backtick (``), curly brackets({}), square brackets([]), parentheses(())
// function bruyneFunction(x, y) {
//     return x + y; 
// }

//Check the condition if (i === 5), if true the value 5 is returned immediately
// from the function. The return value of the bruyneFunction function is 5.
function bruyneFunction(x, y, i) {
    console.log(`1`);
    console.log(`2`);
    console.log(`3`);
    if (i === 5) return i; 
    console.log(`4`);
    console.log(`5`);
    return x + y;
}
console.log(`Check sum x + y = ${bruyneFunction(4,5,5)}`)

//note: 
// when you want to exit a program, use return