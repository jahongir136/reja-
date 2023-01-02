console.log('web server');
const express = require("express");
const app = express();
const http = require("http");

// 1 kirish codle
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session code

// 3 views code 
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code 
app.get("/hello", function(req, res) {
    res.end("<h1>hello world by jahon</h1>");
});
app.get("/gift", function(req, res) {
    res.end("<h1>siz sovga'alar bo'limidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succsessfully on port: ${PORT}`);
});