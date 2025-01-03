console.log(`Hello JS assdd`)

let arrTop4 = ['Mancity', 'MU', 'Chelsea', 'Liverpool'];

// For loop 
for (let i = 0; i < arrTop4.length; i++) {
    console.log(`Top ${i + 1}: ${arrTop4[i]}
    -----------------------------------------`)
} 

// while  
// should not set condition become true, it will run loop infinity 
let i = 0;
while(i < arrTop4.length) {
    console.log(`Top ${i + 1}: ${arrTop4[i]}
    -----------------------------------------`);
    i++;
}

// do/while 
do { 
    console.log(`Top ${i + 1}: ${arrTop4[i]}
    -----------------------------------------`);
    i++;
} while(i < 3)

// When should I use a for loop?
// Use a for loop when we know exactly how many times we need to do it.

// when should I use a while loop? 
// Use when you don't know the number of iterations (lặp lại) in advance(nâng cao, trước)
// (or the loop condition may change during execution) and want to continue looping 
// as long as(miễn là) the condition remains true.

// when should i use a do/while loop? 
// Use when you want to ensure that the code in a loop is executed at least once, 
// regardless of whether (bất kể có hay không) the stop condition is true or not.

let flag = false;

while (!flag) {
    console.log(`Check value ${i}`)
    i++;
    if (i === 10) flag = true;
}
