const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    name: { type: string }
}, { collection: 'user' })

const User = mongoose.model("User", UserSchema)

module.exports = User