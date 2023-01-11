console.log('web server');
const { json } = require("express");
const express = require("express");
const app = express();
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf-8",   (err, date) => {
    if (err) {
        console.log("ERR");
    } else {
        user = JSON.parse(date) 
    }
});

//MongoDB chaqrish
const db = require("./server").db();

// 1: Kirish code 
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
    res.render("reja");
})

module.exports = app;


