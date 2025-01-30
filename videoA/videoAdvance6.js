console.log(`Hello World from HTML`)
// + Callback Hell
// Looking at this code, it is easy to see that the callback functions are nested(lồng) too deeply, 
// leading to code that is difficult to read and maintain(bảo trì). This is callback hell.

const callback = (err, data) => {
    if (err) {
        console.log(`Calling Callback:`, err);
    }
    if (data) {
        console.log(`Calling Callback:`, data)
    }
}

function getTodos(id, callback) {
    var requests = new XMLHttpRequest();
    requests.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            const data = JSON.parse(requests.responseText);
            const dataString = JSON.stringify(data);
            callback(undefined, data);
            // callback(undefined, dataString);
            // callback(undefined, requests.respondText);
        }
        if (this.readyState == 4 && this.status !== 200) {
            callback(`Something wrong with data`, undefined);
        }
    };
    requests.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    requests.send();
}

getTodos(1, (err, data) => {
    if (err) {
        console.log(`Calling Callback:`, err);
    }
    if (data) {
        console.log(`Calling Callback:`, data);
        getTodos(2, (err, data) => {
            if (err) {
                console.log(`Calling Callback:`, err);
            }
            if (data) {
                console.log(`Calling Callback:`, data)
                getTodos(3, (err, data) => {
                    if (err) {
                        console.log(`Calling Callback:`, err);
                    }
                    if (data) {
                        console.log(`Calling Callback:`, data)
                    }
                });
            }
        });
    }
});
// Send a series of asynchronous HTTP GET requests to the API jsonplaceholder.typicode.com/todos/{id}.
// Call the request chain(chuỗi):
// Request to get todo with ID 1.
// If successful, send a request to get todo with ID 2.
// If successful, request to get todo with ID 3.
// getTodos(2, callback);




// + JSON.parse()
// Converts(chuyển, biến đổiđổi) a JSON string into a JavaScript object. ()

// + JSON.stringify()
// Biến đổi một đối tượng JavaScript thành chuỗi JSON. EX: {"name":"Bob","age":30}

