const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String },
    date_posted: { type: String },
    upvotes: { type: Number },
    downvotes: { type: Number }
}, { collection: 'post' })

const Post = mongoose.model("Post", PostSchema)

module.exports = Post