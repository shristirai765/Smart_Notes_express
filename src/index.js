import http from "http";
import express from "express";

//* creating express app instance
const app = express();

//* creating http server
const server = http.createServer(app);

// app.get(path, handler);
app.get('/', (req, res)=>{
    res.send("<h1> Home Page</h1>");
})

server.listen(8080, ()=>{
    console.log(`Server is running at http://localhost:8080`);
    console.log("press ctrl+c to close the server");
})