console.log(`Hello World From HTML`)

// declaration type of reduce(callback, initial value)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// sort 
// const arr = [1, 30, 4, 21, 100000];
// arr.sort((a,b) =>  a - b);
// console.log(arr)

// sort string 
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

// Number arrangement (sắp xếp)
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Ascending (tăng dần) order(thứ tự) 
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.sort((a, b) => b - a); // Descending(giảm dần) order
console.log(numbers); // Output: [5, 4, 3, 2, 1]

// object 
var items = [
    { name: 'Bruyne', age: 25 },
    { name: 'Duyka', age: 22 },
    { name: 'Duong', age: 23 },
    { name: 'Phat', age: 24 },
    { name: 'Khanh', age: 25 },
    { name: 'Long', age: 26 }
]

// items.sort((a,b) => {
//     return a.age - b.age;
// })


items.sort((c, d) => {
    const nameA = c.name.toUpperCase();
    const nameB = d.name.toUpperCase();
    if (nameA < nameB) {
        return -1; //nameA comes before nameB in alphabetical order(thứ tự chữ cái)
    } else {
        return 1; //nameB comes before nameA in alphabetical order(thứ tự chữ cái)
    }
    return 0;
// here is another way to write
//     return nameA < nameB ? -1 : 1;
})

console.log(items)