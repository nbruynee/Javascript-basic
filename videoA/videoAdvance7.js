console.log(`Hello World from HTML`)
// + Promises
// Use new Promise() to instantiate a Promise.
// Promise takes an executor function with two parameters:
// resolve: Called when the operation(thao tác) is successful and returns data.
// reject: Called when there is an error or the operation fails.

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
                reject("SomeThing Wrong")
            }
        };
        requests.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        requests.send();
    })
}

getTodos(1).then(data => {
    console.log(`>>>Data:`, data);
}).catch(error => {
    console.log(`Something wrong:`, error)
})

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


// const promisesExp = () => {
//     return new Promise((resolve, reject) => {
//         resolve({name: 'Bruynene', channel: 'BruyneDinhvac'});
//         reject('Something Wrong');

//     });
// }

// promisesExp().then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// });


// + .then(data => ...):
// Called when the Promise completes successfully (resolve is called).
// data gets the value from resolve.

// + .catch(error => ...):
// Called when the Promise fails (reject is called).
// error gets the value from reject.