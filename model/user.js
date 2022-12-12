const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require: true,
    },
    fullname: {
        type : String,
        require : false,
    },
    phoneNumber : {
        type: Number,
        require: false,
    },
    email : {
        type : String,
        require: false,
    },
    isAdmin : {
        type : Boolean,
        require : false
    }
})

module.exports = mongoose.model('User', userSchema)