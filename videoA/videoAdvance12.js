console.log(`Hello World from HTML`)
// destructuring assignment(phân tích cấu trúc)
// Destructuring Assignment is a syntax in JavaScript that allows to extract(tách) values ​​from arrays or 
// objects and assign them to variables in a concise(ngắn gọn) way.
// -----------------------------------------------------------------------------------------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log(`>>>Array is: `, arr)

// -----------------------------------------------------------------------------------------------------------
// let arr1 = [...arr, 6];
// console.log(`>>>Arr 1 is: `, arr1)
// The spread operator (...) makes a copy of arr and adds element 6 to the end.
// arr1 is a new array, it does not change arr.

// -----------------------------------------------------------------------------------------------------------
// let arr2 = arr.push(7);
// console.log(`>>>Arr 2 is:`, arr2)
// console.log(`>>>Arr 2 is:`, arr)
// Value of arr2: 6
// Value of arr: [1, 2, 3, 4, 5, 7]
// Explanation:
// arr.push(7) does not return a new array but returns the length of the array after adding the element.
// arr is changed directly to [1, 2, 3, 4, 5, 7].
// -----------------------------------------------------------------------------------------------------------
let arr3 = {
    name: `Bruyne`,
    address: `Thich Quang Duc`, 
    channel: `BruyneDinhvcl`
}

// let arr4 = {...arr3, channel: `BruyneDinhvcl`}
// console.log(`>>>Check object 4: `, arr3);

// -----------------------------------------------------------------------------------------------------------
// let name = state.name;
// let address = state.address;
// let channel = state.channel;
// Initial declaration (direct access):
// Benefits: Clear, easy to understand for JavaScript beginners.
// Disadvantages: Takes up many lines of code if you need to extract(trích xuất) many properties, not flexible.

// -----------------------------------------------------------------------------------------------------------
// Declaration with destructuring:
// Benefits: Write more concisely(ngắn gọn), easy to maintain and easy to read, especially when you have to 
// deal(xử lý) with many properties from the object.
// Disadvantages: Need to understand how destructuring works, if there is a difference in the variable name 
// and the property of the object, errors may occur.
let {name, address, channel} = arr3;
console.log(`>>>Check object 4: `, name, address, channel);

let arr5 = ['King', 'King Dinh VCL'];
let [name1, channel1] = arr5;
console.log(`>>>Check arr 5:`, name1, channel)

// -----------------------------------------------------------------------------------------------------------
// Arrays: You destructure using square brackets [], and just place the elements in the array correctly.
// Objects: You destructure using curly brackets {}, and the variable names must match the property names in the object.

