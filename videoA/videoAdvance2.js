console.log(`Hello world from JS`)

var requests = new XMLHttpRequest();
// + This is the step of creating an XMLHttpRequest object. This object is used to send and receive data between the client (browser) 
// and the server over the HTTP protocol (giao thức).

requests.onreadystatechange = function () {
    if (this.readyState == 4) {
        // Typical action to be performed when the document is ready:
        console.log(`>>>>Check res:`, requests);
    }
};
// + requests.onreadystatechange: This is an event that is called whenever the state of the request changes.
// + readyState: This property represents the current state of the request.
// The values ​​of readyState have the following meanings:
// + 0: UNSENT – The XMLHttpRequest object has just been created, but has not called open() (not sent the request).
// + 1: OPENED – Open() has been called, preparing to send the request.
// + 2: HEADERS_RECEIVED – The server has received the request and started sending the response (response headers are ready).
// + 3: LOADING – Loading data from the server.
// + 4: DONE – The data from the server has been completely loaded, and the response is ready to be processed.
// + if (this.readyState == 4): Checks whether the request is complete (state = 4).
// + If it is complete, you can perform actions such as processing the results or checking for errors.

requests.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// + open(method, url, async): Prepare to send a request with the following parameters:
// method: HTTP method, here is "GET" (to get data from the server).
// url: The API server address you want to call, here is https://jsonplaceholder.typicode.com/todos/1.
// async: true means the request will be performed asynchronously, meaning the program is not "blocked" while waiting for data from the server.
requests.send(); 

// + Request from someone else's server:
// This is a way to get data from another server over the network (usually using HTTP/HTTPS).
// + How it works:
// You send an HTTP request from a client (browser, application) to a server over the internet.
// The server processes the request and returns data (usually JSON, XML, HTML, or plain text).

// + Request from database (DB):
// This is how to get data from a database, but this database is usually the system you are working on.
// + How it works:
// A server (managed by you) makes a query to the database to get data.
// Then, the server processes the data and sends the results back to the client via (qua) HTTP response.