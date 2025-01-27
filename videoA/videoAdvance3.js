console.log(`Hello world from HTml`)

var requests = new XMLHttpRequest();
requests.onreadystatechange = function() {
    if (this.readyState == 4 && this.status === 200) {
       // Typical action to be performed when the document is ready:
       console.log(`>>>Check res:`, requests) ;
    } else {
        console.log(`>>>Check status:`, requests.status)
    }
};
requests.open("GET", "https://jsonplaceholder.typicode.com/todos/1s", true);
requests.send();

// + 2xx: Success
// 200 OK: The request was successful and a response was returned.
// 201 Created: The request was successful and a new resource was created (for example, when sending a POST request).
// 204 No Content: The request was successful but no data was returned.

// + 2. 3xx: Redirects (chuyển hướng)
// 301 Moved Permanently(vĩnh viễn): The resource has been permanently moved to a new URL.
// 302 Found: The resource has been temporarily(tạm thời) moved to a different URL.
// 304 Not Modified(sửa đổi): The resource has not changed since the last request, the client can use cached(đã lưu trữ) data.

// + 3. 4xx: Client-side error
// 400 Bad Request: The request is invalid(không hợp lệ), usually due to a syntax error or incorrect data.
// 401 Unauthorized (không được phép): Authentication(xác thực) is required but there is no valid login information.
// 403 Forbidden(bị cấm): You do not have permission(cho phép) to access this resource.
// 404 Not Found: Resource does not exist (as in your code: https://jsonplaceholder.typicode.com/todos/1s is a 404 error because there is no 1s in that API).
// 429 Too Many Requests: Too many requests sent in a short time (often when rate limited).

// + 4. 5xx group: Server error
// 500 Internal Server Error: Server encountered (gặp phải) an unspecified(không xác thực) error while processing the request.
// 502 Bad Gateway: Intermediate(trung gian) server (proxy or gateway) received an error response from the back-end server.
// 503 Service Unavailable: Server cannot process the request at that time (overloaded or under maintenance(bảo trì)).
// 504 Gateway Timeout: Intermediate server did not receive a response from the back-end server within the allowed time.