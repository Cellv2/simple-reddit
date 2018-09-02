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
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    admins: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]
});

module.exports = mongoose.model("Subreddit", subredditSchema);
