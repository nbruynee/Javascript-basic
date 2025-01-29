console.log(`Hello World from HTML`)

// + Use without () (pass function, not execute immediately)
// Use when:
// Pass function as parameter (callback) for another function to call back later.
// Just reference(tham chiếu) the function without executing it immediately

// + Use with () (execute immediately)
// Use when:
// Want to execute the function immediately.
// Need to get the return value of the function.

const callback = (err, data) => {
    if(err) {
        console.log(`Calling Callback:`, err);
    }
    if(data){
        console.log(`Calling Callback:`, data)

    }
}

function getTodos(callback) {
    var requests = new XMLHttpRequest();
    requests.onreadystatechange = function () {
        if (this.readyState == 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            const data = requests.responseText;
            callback(undefined, data);
        } 
        if (this.readyState == 4 && this.status !== 200 ) {
            callback(`Something wrong with data`, undefined);
        }
    };
    requests.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    requests.send();
}

getTodos(callback);

// The callback is passed to getTodos() and is still accessible(có thể truy cập) in the if because 
// it is a parameter to the function.
// Thanks to closure, JavaScript remembers and keeps a reference to the 
// callback, even if (ngay cả khi) onreadystatechange runs after getTodos() has finished.