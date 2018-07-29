//express config
const express = require("express");
const port = 3000;

//route imports
const subredditRoutes = require("./routes/subreddits.js");

//app config
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//INDEX
//NEW
//CREATE
//SHOW
//EDIT
//UPDATE
//DESTROY

//INDEX
app.get("/", function(req, res) {
    // res.send("hi!!");
    res.render("landing");
});


// ====
// subreddits
// ====

//INDEX
app.get("/subreddits", function(req, res) {
    // res.send("sub landing page");
    res.render("subreddits/index")
});

//NEW
app.get("/subreddits/new", function(req, res) {
    res.render("subreddits/new");
});

//CREATE
app.post("/subreddits", function(req, res) {
    res.send("create route");
});

//set up express listener
app.listen(port, "localhost", function(err) {
    if (err) {
        chalk.red(console.log("Things gone real bad, help"));
    }
});
