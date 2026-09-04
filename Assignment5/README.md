# Express.js Basics Assignment

This assignment demonstrates the basics of creating an Express.js server, 
defining routes, handling route parameters, query parameters, and accessing 
request information.

##  Project Structure

```text
Assignment5/
│
├── node_modules/
│
├── task1/
│   └── server.js
│
├── task2/
│   └── server.js
│
├── task3/
│   └── server.js
│
├── task4/
│   └── server.js
│
├── task5/
│   └── server.js
│
├── package.json
├── package-lock.json
└── README.md


 Technologies Used
Node.js
Express.js
JavaScript
Task 1: Basic Routes
Description

Created a simple Express server with multiple basic routes.

Routes
Method	Route	Response
GET	/	Welcome to Home Page
GET	/about	This is About Page
GET	/contact	This is Contact Page
Example
GET /

Response:

Welcome to Home Page
Task 2: Route Parameter
Description

Created a dynamic route that accepts a user's name from the URL.

Route
GET /user/:name

The :name part is a dynamic route parameter.

Example
GET /user/john

Response:

Hello john

Another example:

GET /user/alex

Response:

Hello alex
Task 3: Multiple Route Parameters
Description

Created a route that accepts multiple dynamic values from the URL.

Route
GET /product/:id/:category

The route accepts:

id → Product ID
category → Product Category
Example
GET /product/101/electronics

Response:

Product ID: 101, Category: electronics

Another example:

GET /product/205/clothing

Response:

Product ID: 205, Category: clothing
Task 4: Query Parameters
Description

Created a search route that reads values using query parameters.

Route
GET /search

Query parameters are passed after ? in the URL.

Example
GET /search?name=john&role=developer

Response:

Name: john, Role: developer

The query parameters are accessed using:

req.query.name
req.query.role
Another Example
GET /search?name=alex&role=designer

Response:

Name: alex, Role: designer
Task 5: Request-Response Understanding
Description

This task demonstrates how to access information about incoming requests.

For every route, the server prints the following information in the terminal:

Request Method
Request URL
Example Terminal Output
GET /about
GET /user/john
GET /search?name=john

This helps understand how the Express server receives and processes HTTP requests.

▶ How to Run the Project
1. Install Dependencies

Open the terminal inside the project folder and run:

npm install

This installs the dependencies listed in package.json.

2. Run a Task

Each task has its own server.js.

For example, to run Task 1:

cd task1
node server.js

Similarly:

cd task2
node server.js
cd task3
node server.js
cd task4
node server.js
cd task5
node server.js
3. Test the Routes

Once the server is running, open the required URL in a browser or API testing tool such as Thunder Client.

For example:

http://localhost:3000/

or:

http://localhost:3000/about
🧪 Sample Requests
Task 1
GET http://localhost:3000/
GET http://localhost:3000/about
GET http://localhost:3000/contact
Task 2
GET http://localhost:3000/user/john
Task 3
GET http://localhost:3000/product/101/electronics
Task 4
GET http://localhost:3000/search?name=john&role=developer
Task 5

The terminal displays information such as:

GET /
GET /about
GET /user/john
GET /search?name=john&role=developer
 Learning Outcomes

Through this assignment, I learned:

How to create an Express.js server
How to create basic GET routes
How to use dynamic route parameters
How to handle multiple route parameters
How to read query parameters using req.query
How to access request method and URL
How the request-response cycle works in Express.js
How to test API routes using a browser or API testing tool
 Conclusion

This assignment provides a basic understanding of routing and request handling
in Express.js. It demonstrates how different types of data can be received
through URLs, route parameters, and query parameters.