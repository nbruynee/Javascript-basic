console.log(`Hello World from HTML`)

// ----------------------------------------------------------------------------------------------------------
// for 
// When you want to change the original array directly (trực tiếptiếp) without creating a new array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 10; i++) {
    arr[i] = arr[i] * arr[i];
    console.log(`Check value i: ${arr[i]}`)
};

// ----------------------------------------------------------------------------------------------------------
// map
// Do not change the original array
// When you want to transform the elements of an array and create a new array, without changing the original array.
let arrMap = arr.map((item, index) => {
    item = item * item;
    return item;
})