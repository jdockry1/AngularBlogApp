const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const user = require('./models/user')
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

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function(err) {
        if(err) throw err;
        User.find({
            username: req.body.username,
            password: req.body.password
        }, function(err, user) {
            if(err) throw err;
            if(user.length == 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            }
            else {
                return res.status(200).json({
                    status: 'failed',
                    message: 'Login Failed'
                })
            }
        })
    })
})

app.listen(3000, () => console.log("blog server running on port 3000"))