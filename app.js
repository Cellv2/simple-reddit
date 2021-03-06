//dev utils
const chalk = require("chalk");
const log = console.log;

//set up dotenv
require("dotenv").config();

//express config
const express = require("express");
const port = 3000;

//database connections
const mongoose = require("mongoose");
const DEV_URI = process.env.DEV_DBCONNECTION;

function connectDatabase() {
    mongoose.connect(
        DEV_URI,
        { useNewUrlParser: true },
        (err, db) => {
            if (err) {
                throw err;
            } else {
                log(chalk.blue("Database successfully connected"));
            }
        }
    );
}
connectDatabase();

// ? This is just a test
// const TestModel = require("./models/test");
// let oneTwoThree = new TestModel({
//     name: "QWERTY",
//     age: 123456,
//     number: "Over9000"
// });

// oneTwoThree.save(function(err, test) {
//     if (err) {
//         log(chalk.red("Something went wrong"));
//     } else {
//         log(chalk.green(test));
//     }
// });
// ? End of test

//route imports
const indexRoutes = require("./routes/index");
const subredditRoutes = require("./routes/subreddits");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

//app config
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

//INDEX
//NEW
//CREATE
//SHOW
//EDIT
//UPDATE
//DESTROY

//route config
app.use("/", indexRoutes);
app.use("/subreddit", subredditRoutes);
app.use("/subreddit/:id/post", postRoutes);
app.use("/user", userRoutes);

//set up express listener
app.listen(port, "localhost", err => {
    if (err) {
        chalk.red(console.log("Things gone real bad, help"));
    }
});
