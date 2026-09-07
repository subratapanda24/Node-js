# Express.js Middleware Assignments

This repository contains three Express.js assignments focused on implementing different types of middleware.

## Assignment 1: Router-Level Middleware

Implemented router-level middleware using Express Router.

### Middleware

* `routerLogger`

### Routes

| Method | Route           | Response      |
| ------ | --------------- | ------------- |
| GET    | `/api/students` | Students List |
| GET    | `/api/courses`  | Courses List  |
| GET    | `/api/faculty`  | Faculty List  |

### Functionality

The `routerLogger` middleware logs:

* HTTP Method
* Request URL
* Current Date & Time

The router is mounted using `/api`, and the middleware executes only for routes inside the router.

---

## Assignment 2: Request Logger Middleware

Implemented custom middleware to log every incoming request.

### Middleware

* `logger`

### Routes

| Method | Route      | Response             |
| ------ | ---------- | -------------------- |
| GET    | `/`        | Welcome to Home Page |
| GET    | `/about`   | About Us             |
| GET    | `/contact` | Contact Information  |

### Functionality

The `logger` middleware logs:

* HTTP Method
* Request URL
* Current Date & Time

The middleware executes before every route.

---

## Assignment 3: Response Time Middleware

Implemented middleware to measure the time taken to process each request.

### Middleware

* `responseTimeLogger`

### Routes

| Method | Route       | Response     |
| ------ | ----------- | ------------ |
| GET    | `/`         | Home Page    |
| GET    | `/products` | Product List |
| GET    | `/users`    | User List    |

### Functionality

The `responseTimeLogger` middleware:

* Records the request start time
* Calculates the total response time
* Displays the response time in milliseconds
* Logs the HTTP Method and Request URL

---

## Technologies Used

* Node.js
* Express.js
* JavaScript

## Concepts Covered

* Express Router
* Router-Level Middleware
* Global Middleware
* Custom Middleware
* `router.use()`
* `app.use()`
* `req.method`
* `req.url`
* `next()`
* `Date.now()`
* Request Lifecycle
* Response Time Measurement

## Project Structure

```text
Assignment6 - Middleware/
│
├── Assignment-1/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── router.js
│   └── server.js
│
├── Assignment-2/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── Assignment-3/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── README.md
└── .gitignore
```

## How to Run

Each assignment is a separate Express.js application.

### Assignment 1

```bash
cd Assignment-1
npm install
node server.js
```

Test:

```text
http://localhost:3000/api/students
http://localhost:3000/api/courses
http://localhost:3000/api/faculty
```

### Assignment 2

```bash
cd Assignment-2
npm install
node server.js
```

Test:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
```

### Assignment 3

```bash
cd Assignment-3
npm install
node server.js
```

Test:

```text
http://localhost:3000/
http://localhost:3000/products
http://localhost:3000/users
```

## Expected Output

The applications display the required information in the terminal and the corresponding responses in the browser as specified in the assignment.

### Assignment 1

```text
GET /api/students YYYY-MM-DD HH:MM:SS
GET /api/courses YYYY-MM-DD HH:MM:SS
GET /api/faculty YYYY-MM-DD HH:MM:SS
```

### Assignment 2

```text
GET / YYYY-MM-DD HH:MM:SS
GET /about YYYY-MM-DD HH:MM:SS
GET /contact YYYY-MM-DD HH:MM:SS
```

### Assignment 3

```text
GET / - X ms
GET /products - X ms
GET /users - X ms
```

The exact date, time, and response time will vary when the applications are executed.

