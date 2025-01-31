console.log(`Hello World from HTML`)
// Fetch API 

const callback = (err, data) => {
    if (err) {
        console.log(`Calling Callback:`, err);
    }
    if (data) {
        console.log(`Calling Callback:`, data)
    }
}

function getTodos(id, callback) {
    return new Promise((resolve, reject) => {
        var requests = new XMLHttpRequest();
        requests.onreadystatechange = function () {
            if (this.readyState == 4 && this.status === 200) {
                // Typical action to be performed when the document is ready:
                const data = JSON.parse(requests.responseText);
                const dataString = JSON.stringify(data);
                // callback(undefined, data);
                resolve(data);
            }
            if (this.readyState == 4 && this.status !== 200) {
                // callback(`Something wrong with data`, undefined);
                reject(`SomeThing Wrong with id: ${id}`)
            }
        };
        requests.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        requests.send();
    })
}
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
fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    return data.json()
}).then(data => {
    console.log(`Check Fetch Data: `, data);
})
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
