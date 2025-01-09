console.log(`Hello world from html`)

//---------------------------------------------------------------------------------------------------
//callback 
// let sum = (a,b, callback) => {
//     let sum1 = a + b;
//     callback(sum1) 
// }

// let printSum = (message) => {
//     console.log(`Check sum 1 + 3 = ${message}`);
// } 
// sum(1, 3, printSum);

//---------------------------------------------------------------------------------------------------
// setTimeout : is a JavaScript function that allows you to perform an action after
// a certain (nhất định) delay (in milliseconds) and only run a time.
// let sum = (a,b, callback) => {
//     let sum1 = a + b;
//     setTimeout(() => {
//         callback(sum1) 
//     }, 5000) 
// }

// let printSum = (message) => {
//     console.log(`Check sum 1 + 3 = ${message}`);
// } 
// sum(1, 3, printSum);

//---------------------------------------------------------------------------------------------------
// setInterval: is a JavaScript function that allows to execute an 
// action repeatedly at a specified(chỉ định) interval of time(khoảng thời gian).
// let sum = (a, b, callback) => {
//     let sum1 = a + b;
//     setInterval(() => {
//         callback(sum1)
//     }, 1000);
// }

// let printSum = (message) => {
//     console.log(`Check sum 1 + 3 = ${message}`);
// }
// sum(1, 3, printSum);

let sum = (a, b, callback) => {
    let sum1 = a + b;
    let i = 0;
    let timer = setInterval(() => {
        callback(sum1);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);
    console.log(`Check i:${i}`)
}

let printSum = (message) => {
    console.log(`Check sum 1 + 3 = ${message}`);
}
sum(1, 3, printSum);
// asynchronous (bất đồng bộ)
// synchronous (đồng bộ )