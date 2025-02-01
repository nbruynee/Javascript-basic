console.log(`Hello World from HTML`)
// Throw Error,  
// + The throw keyword is used to throw an error in JavaScript. When a throw occurs, the program will stop immediately 
// at that line and jump to catch if there is one, or stop completely if it is not handled.
// Try catch 
// try { ... }: The part of the code that needs to be run, where an error may occur.
// catch(err) { ... }: If there is an error in try, JavaScript will move here to handle the error.
// Mechanism(cơ chế):
// When there is an error, the rest of(phần còn lại) try will not be executed, the program will immediately move to catch.
// If there is no error, catch is skipped.

// -----------------------------------------------------------------------------------------------------------
// const getNewToDo1 = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     // console.log(`>>>check response: `, response);
//     if (response && response.status !== 200) {
//         throw new Error(`Something wrong with status code:` + response.status);
//     }
//     let data = await response.json();
//     return data;
// }

// getNewToDo1(`asdasd12`).
//     then(data => {
//         console.log(`>>>Check data:`, data);
//     }).catch(err => {
//         console.log(`>>>Error:`, err);
//     });

// -----------------------------------------------------------------------------------------------------------
// const getNewToDo = async (id) => {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

//         let data = await response.json();
//         return data; // resolve
//     } catch (e) {
//         console.log(`>>> check catch error:`, e)
//     }
// }

// getNewToDo(`asdasd12`).
//     then(data => {
//         console.log(`>>>Check data:`, data);
//     }).catch(err => {
//         console.log(`>>>Error:`, err.message);
//     });

// Use try-catch inside async function.
// + In try:
// Perform fetch() and parse JSON steps.
// If no error, return data.
// + In catch:
// If there is an error (due to fetch() or JSON parse), the error is caught and printed to console
// Why is .catch() not visible?
// + When an error occurs inside the try, the error is caught inside the function, so the outer(bên ngoàingoài) .catch()
// does not receive the error.
// + Because catch does not rethrow the error, the Promise is not rejected.

// -----------------------------------------------------------------------------------------------------------
const getNewToDo2 = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response && response.status !== 200) {
            throw new Error(`Something wrong with status code:` + response.status);
        }
        let data = await response.json();
        return data; // resolve
    } catch (e) {
        console.log(`>>> check catch error:`, e)
    }
}

getNewToDo2(`asdasd12`).
    then(data => {
        console.log(`>>>Check data:`, data);
    }).catch(err => {
        console.log(`>>>Error:`, err.message);
    });


// -----------------------------------------------------------------------------------------------------------
// const callback = (err, data) => {
//     if (err) {
//         console.log(`Calling Callback:`, err);
//     }
//     if (data) {
//         console.log(`Calling Callback:`, data)
//     }
// }

// function getTodos(id, callback) {
//     return new Promise((resolve, reject) => {
//         var requests = new XMLHttpRequest();
//         requests.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status === 200) {
//                 // Typical action to be performed when the document is ready:
//                 const data = JSON.parse(requests.responseText);
//                 const dataString = JSON.stringify(data);
//                 // callback(undefined, data);
//                 resolve(data);
//             }
//             if (this.readyState == 4 && this.status !== 200) {
//                 // callback(`Something wrong with data`, undefined);
//                 reject(`SomeThing Wrong with id: ${id}`)
//             }
//         };
//         requests.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//         requests.send();
//     })
// }


// -----------------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     console.log(`Check Fetch Data: `, data);
// })

// fetch() returns a Promise containing the Response object.
// When you call console.log(data), you are only printing out (in ra) the Response object's
// information, not getting(không chứa) the JSON content from the response.
// Problem: You don't get the actual(thực) data (body) from the response because you haven't called .json().

// -----------------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     let data1 = data.json();
//     console.log(`Check Fetch Data: `, data1);
// })

// data.json() returns a Promise, not the live data.
// It's printing out the Promise {<pending>}, not the JSON content.
// Problem: Need to wait (await) or handle with .then() to get result from data.json().

// -----------------------------------------------------------------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//     return data.json()
// }).then(data => {
//     console.log(`Check Fetch Data: `, data);
// })

// data.json() returns a Promise containing the JSON parse result.
// Use .then() next to handle the result when the Promise is resolved.

// getTodos(1).then(data1 => {
//     console.log(`>>>Data 1:`, data1);
//     return getTodos(2);
// })
//     .then(data2 => {
//         console.log(`>>>Data 2:`, data2);
//         return getTodos(3)
//     })
//     .then(data3 => {
//         console.log(`>>>Data 3:`, data3);
//     })
//     .catch(error => {
//         console.log(`Something wrong:`, error)
//     })











// getTodos(1, (err, data) => {
//     if (err) {
//         console.log(`Calling Callback:`, err);
//     }
//     if (data) {
//         console.log(`Calling Callback:`, data);
//         getTodos(2, (err, data) => {
//             if (err) {
//                 console.log(`Calling Callback:`, err);
//             }
//             if (data) {
//                 console.log(`Calling Callback:`, data)
//                 getTodos(3, (err, data) => {
//                     if (err) {
//                         console.log(`Calling Callback:`, err);
//                     }
//                     if (data) {
//                         console.log(`Calling Callback:`, data)
//                     }
//                 });
//             }
//         });
//     }
// });
