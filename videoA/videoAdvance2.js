console.log(`Hello world from JS`)

var requests = new XMLHttpRequest();
requests.onreadystatechange = function () {
    if (this.readyState == 4) {
        // Typical action to be performed when the document is ready:
        console.log(`>>>>Check res:`, requests);
    }
};
requests.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
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