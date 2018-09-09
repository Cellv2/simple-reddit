const express = require("express");
const router = express.Router();
const Subreddit = require("../models/subreddit");

//dev utils
const chalk = require("chalk");
const log = console.log;

//TODO: Redirect requests to the subreddit root (/subreddits/) to the home page - there should be no single place for all subreddits to show
//INDEX
router.get("/", (req, res) => {
    // res.render("subreddits/show");
    res.send("Index page, to be removed");
});

//NEW
router.get("/new", (req, res) => {
    res.render("subreddits/new");
});

//TODO: Implement user ID into subreddit create as the owner

//CREATE
router.post("/", (req, res) => {
    const subredditObj = req.body.subreddit;
    Subreddit.create(
        {
            name: subredditObj.name,
            description: subredditObj.description
        },
        (err, subreddit) => {
            if (err) {
                log(err);
            } else {
                log(subreddit);
                res.redirect("/");
            }
        }
    );
});

//TODO: Make the GET use the subreddit name, and ensure that new subreddits have a unique name
//SHOW
router.get("/:id", (req, res) => {
    Subreddit.findById(req.params.id)
        .populate("posts")
        .exec((err, subreddit) => {
            if (err) {
                log(chalk.red("Something wrong - ", err));
            } else {
                res.render("subreddits/show", { subreddit: subreddit });
            }
        });
});

//register route

//login route

//login redirect logic

//logout route

module.exports = router;
