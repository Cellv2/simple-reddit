const express = require("express");
const router = express.Router();
const subreddit = require("../models/subreddit");

//dev utils
const chalk = require("chalk");
const log = console.log;

//INDEX
router.get("/", function(req, res) {
    res.render("subreddits/show");
});

//NEW
router.get("/new", function(req, res) {
    res.render("subreddits/new");
});

//TODO: Implement user ID into subreddit create as the owner

//CREATE
router.post("/", function(req, res) {
    const subredditObj = req.body.subreddit;
    subreddit.create(
        {
            name: subredditObj.name,
            description: subredditObj.description
        },
        function(err, subreddit) {
            if (err) {
                log(err);
            } else {
                log(subreddit);
                res.redirect("/");
            }
        }
    );
});

//register route

//login route

//login redirect logic

//logout route

module.exports = router;
