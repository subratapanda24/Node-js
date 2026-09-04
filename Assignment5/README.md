# Express.js Basics Assignment

This assignment demonstrates the basics of creating an Express.js server, defining routes, handling route parameters, query parameters, and accessing request information.

---

## Project Structure

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
````

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript

---

## Task 1 — Basic Routes

### Description

Created a simple Express server with multiple basic routes.

### Routes

| Method | Route      | Response             |
| ------ | ---------- | -------------------- |
| GET    | `/`        | Welcome to Home Page |
| GET    | `/about`   | This is About Page   |
| GET    | `/contact` | This is Contact Page |

### Example

**Request**

```text
GET /
```

**Response**

```text
Welcome to Home Page
```

---

## Task 2 — Route Parameter

### Description

Created a dynamic route that accepts a user's name from the URL.

### Route

```text
GET /user/:name
```

Here, `:name` is a dynamic route parameter.

### Example

**Request**

```text
GET /user/john
```

**Response**

```text
Hello john
```

---

## Task 3 — Multiple Route Parameters

### Description

Created a route that accepts multiple dynamic values from the URL.

### Route

```text
GET /product/:id/:category
```

The route accepts:

* `id` → Product ID
* `category` → Product Category

### Example

**Request**

```text
GET /product/101/electronics
```

**Response**

```text
Product ID: 101, Category: electronics
```

---

## Task 4 — Query Parameters

### Description

Created a search route that reads data using query parameters.

### Route

```text
GET /search
```

### Example

**Request**

```text
GET /search?name=john&role=developer
```

**Response**

```text
Name: john, Role: developer
```

### Query Parameters Used

```javascript
req.query.name
req.query.role
```

---

## Task 5 — Request-Response Understanding

### Description

Displays request information in the terminal for every route.

The server prints:

* Request Method
* Request URL

### Example Terminal Output

```text
GET /about
GET /user/john
GET /search?name=john
```

---

## ▶ How to Run

### 1. Install Dependencies

Open the terminal in the project folder:

```bash
npm install
```

### 2. Run a Task

Each task contains its own `server.js`.

For Task 1:

```bash
cd task1
node server.js
```

For Task 2:

```bash
cd task2
node server.js
```

For Task 3:

```bash
cd task3
node server.js
```

For Task 4:

```bash
cd task4
node server.js
```

For Task 5:

```bash
cd task5
node server.js
```

---

## Testing

The routes can be tested using a browser or Thunder Client.

### Task 1

```text
GET http://localhost:3000/
GET http://localhost:3000/about
GET http://localhost:3000/contact
```

### Task 2

```text
GET http://localhost:3000/user/john
```

### Task 3

```text
GET http://localhost:3000/product/101/electronics
```

### Task 4

```text
GET http://localhost:3000/search?name=john&role=developer
```

---

##  Learning Outcomes

Through this assignment, I learned:

* Creating an Express.js server
* Creating basic GET routes
* Using dynamic route parameters
* Handling multiple route parameters
* Reading query parameters using `req.query`
* Accessing request method and URL
* Understanding the request-response cycle
* Testing API routes using Thunder Client

---

## Conclusion

This assignment provides a basic understanding of routing and request handling in Express.js.

It demonstrates how data can be received through basic routes, route parameters, multiple route parameters, and query parameters.

```

