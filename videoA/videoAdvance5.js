console.log(`Hello World from HTML`)
// JSON data

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
            const data = JSON.parse(requests.responseText);
            const dataString = JSON.stringify(data);
            callback(undefined, data);
            callback(undefined, dataString);
            callback(undefined, requests.responseText);
        } 
        if (this.readyState == 4 && this.status !== 200 ) {
            callback(`Something wrong with data`, undefined);
        }
    };
    requests.open("GET", "data.json", true);
    requests.send();
}

getTodos(callback);

// The callback is passed to getTodos() and is still accessible(có thể truy cập) in the if because 
// it is a parameter to the function.
// Thanks to closure, JavaScript remembers and keeps a reference to the 
// callback, even if (ngay cả khi) onreadystatechange runs after getTodos() has finished.