const mongoose = require("mongoose");

const subredditSchema = new mongoose.Schema({
    name: String,
    description: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    owners: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
        }
    ]
});

module.exports = mongoose.model("Subreddit", subredditSchema);
