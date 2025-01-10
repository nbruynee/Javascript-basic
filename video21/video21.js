console.log(`Hello World from HTML`)

// find and filter 
// filter: The filter() method in JavaScript is used to create a new array containing all the 
// elements in the original array that satisfy the condition of the callback function.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let filter = arr.filter((item, index) => {
//     console.log(`Item: ${item}, Index: ${index}`);
//     return item && item < 5;
// });

// console.log(`Fillter: ${filter} `)

// let arr = [
//     { name: 'Bruyne', age: 25 },
//     { name: 'Duyka', age: 27 },
//     { name: 'Khanh', age: 28 },
//     { name: 'Trong', age: 29 },
//     { name: 'Kevin', age: 28 },
// ]

// let filter = arr.filter((item, index) => {
//     // console.log(`Item: ${item}, Index: ${index}`);
//     return item && item.age === 28;
// });

// console.log(filter)

// The find() method is used to return the first element in the array that satisfies the condition of the callback function.
let arr1 = [
    { name: 'Bruyne', age: 25 },
    { name: 'Duyka', age: 27 },
    { name: 'Khanh', age: 28 },
    { name: 'Trong', age: 29 },
    { name: 'Kevin', age: 28 },
]

let filter1 = arr1.find((item, index) => {
    // console.log(`Item: ${item}, Index: ${index}`);
    return item && item.age === 28;
});

console.log(filter1)

// note: ${}: Use template string.
// + Variable is coerced(bị ép)to string if it is an object (result is [object Object]).
// + Suitable when needing to insert variables into strings.
// (nameVariable): Print the value directly, especially useful when 
// debugging with objects or arrays (preserves(giữ nguyên) the structure of the value).