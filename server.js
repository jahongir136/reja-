console.log('web server');
const { json } = require("express");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf-8", (err, date) => {
    if (err) {
        console.log("ERR");
    } else {
        user = JSON.parse(date) 
    }
});


// 1 kirish codle
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 session code

// 3 views code 
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routing code 
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"})
})

app.get('/author', (req, res) => {
  res.render('author', { user: user});
})

app.get("/", function(req, res) {
    res.render("harid");
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succsessfully on port: ${PORT}`);
});