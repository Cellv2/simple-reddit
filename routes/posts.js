const express = require("express");
const router = express.Router({ mergeParams: true });
const Subreddit = require("../models/subreddit");
const Post = require("../models/post");

//dev utils
const chalk = require("chalk");
const log = console.log;

//TODO: Change subreddit ID to name
//NEW
router.get("/new", (req, res) => {
    Subreddit.findById(req.params.id, (err, subreddit) => {
        if (err) {
            log(err);
        } else {
            res.render("posts/new", { subreddit: subreddit });
        }
    });
});

//TODO: Sanitise post input
//SHOW
router.get("/:post_id", (req, res) => {
    Subreddit.findById(req.params.id, (err, subreddit) => {
        if (err) {
            log(err);
        } else {
            Post.findById(req.params.post_id, (err, post) => {
                if (err) {
                    log(err);
                } else {
                    res.render("posts/show", {
                        subreddit: subreddit,
                        post: post
                    });
                }
            });
        }
    });
});

//CREATE
router.post("/", (req, res) => {
    Subreddit.findById(req.params.id, (err, subreddit) => {
        if (err) {
            log(err);
        } else {
            Post.create(req.body.post, (err, post) => {
                if (err) {
                    log(err);
                } else {
                    //save post information
                    //TODO: Add in the author id and username into the post
                    post.save();
                    //connect new post to the subreddit
                    subreddit.posts.push(post);
                    subreddit.save();
                    //redirect to show the newly created post
                    res.redirect(
                        "/subreddit/" + subreddit._id + "/post/" + post._id
                    );
                    // res.send("post created");
                }
            });
        }
    });
});

module.exports = router;
