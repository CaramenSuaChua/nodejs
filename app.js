const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const hotelRoutes = require('./routes/hotel')
const userRoutes = require('./routes/user')
const User = require('./model/user')
const transRouter = require('./routes/transaction')

const app = express()
app.use(express.json())
app.use(cors())
app.use(hotelRoutes)
app.use(userRoutes)
app.use(transRouter)
const http = require('http')
const server = http.createServer(app)
mongoose.connect('mongodb+srv://ngodung:ngodung3042000@cluster0.vqhwglw.mongodb.net/booking?retryWrites=true&w=majority')
.then(result => {
    User.findOne().then(user => {
        if(!user){
            const newUser = new User({
                name : 'dung',
                password : 123456,
                isAdmin : true
            })
            newUser.save()
        } 
    })
    server.listen(5000)
})
.catch(err => console.log(err))