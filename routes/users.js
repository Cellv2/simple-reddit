const express = require("express");
const router = express.Router();
const User = require("../models/user");

//dev utils
const chalk = require("chalk");
const log = console.log;

//INDEX
router.get("/", (req, res) => {
    res.send("user route");
});

//SHOW
router.get("/:id", (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            log(err);
        } else {
            log(user)
            res.render("users/show", { user: user });
        }
    });
});

//UPDATe

module.exports = router;
