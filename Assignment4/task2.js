const http = require("http");


const server = http.createServer((req, res) => {


   res.end(`
       <h1>Student Portal</h1>
       <p>Name: Subrata Panda</p>
       <p>Course: Full Stack Development</p>
       <p>College: ITM SKILLS UNIVERSITY</p>
       <p>Welcome to our Node.js application.</p>
   `);


});


server.listen(3000, () => {
   console.log("Server is running on http://localhost:3000");
});
