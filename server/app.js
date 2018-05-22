const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const url = "mongodb+srv://joedockry:joedockry@cluster0-520bx.mongodb.net/test"

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err) {
        if(err) throw err;
        console.log("Connected successfully, username is" + req.body.username + ", password is " + req.body.password);
    })
})

app.listen(3000, () => console.log("blog server running on port 3000"))