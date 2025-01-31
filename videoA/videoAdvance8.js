console.log(`Hello World from HTML`)
// + chain Promises

// When you need to perform multiple asynchronous operations in sequence(bộ tuần tự) (e.g. consecutive(liên tiếp) API calls),
// instead of nesting callbacks (callback hell), you can chain promises by calling .then() one after another.   
// Promise chaining: Each .then() returns a new Promise. The result of one .then() is passed to the next .then()

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

getTodos(1).then(data1 => {
    console.log(`>>>Data 1:`, data1);
    return getTodos(2);
})
    .then(data2 => {
        console.log(`>>>Data 2:`, data2);
        return getTodos(3)
    })
    .then(data3 => {
        console.log(`>>>Data 3:`, data3);
    })
    .catch(error => {
        console.log(`Something wrong:`, error)
    })

// Call getTodos(1) and wait for the result.
// If successful, call getTodos(2).
// If successful, call getTodos(3).
// If there is an error at any step, .catch() will handle the error.










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
