const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { collection: 'post' })

const Post = mongoose.model("Post", PostSchema)

module.exports = Post