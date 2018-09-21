const express = require("express");
const router = express.Router();
const Subreddit = require("../models/subreddit");
const User = require("../models/user");

//dev utils
const chalk = require("chalk");
const log = console.log;

//TODO: Remove the list of subreddits? Not sure
//INDEX
router.get("/", (req, res) => {
    Subreddit.find({}, (err, subreddits) => {
        if (err) {
            log(chalk.red(err));
        } else {
            res.render("landing", { subreddits: subreddits });
        }
    });
});

//register
router.get("/register", (req, res) => {
    res.render("register");
});

//register POST
router.post("/", (req, res) => {
    const userObj = req.body.user;
    User.create(
        {
            username: userObj.username,
            email: userObj.email,
            password: userObj.password
        },
        (err, user) => {
            if (err) {
                log(err);
            } else {
                log(user);
                res.redirect("/");
            }
        }
    );
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
