const express = require("express");
const router = express.Router();
const Subreddit = require("../models/subreddit");

//dev utils
const chalk = require("chalk");
const log = console.log;

//TODO: Remove the list of subreddits? Not sure
//INDEX
router.get("/", function(req, res) {
    Subreddit.find({}, function(err, subreddits) {
        if (err) {
            log(chalk.red(err));
        } else {
            res.render("landing", { subreddits: subreddits });
        }
    });
});

//register
router.get("/register", (req, res) => {
    res.send("register route");
});

//register POST
router.post("/register", (req, res) => {
    res.send("register POST route");
});

//login
router.get("/login", (req, res) => {
    res.send("login route");
});

//logout
router.get("/logout", (req, res) => {
    res.send("logout route");
});

module.exports = router;
