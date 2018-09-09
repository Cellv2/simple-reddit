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

module.exports = router;
