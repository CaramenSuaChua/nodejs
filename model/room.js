const mongoose = require('mongoose')

const Schema = mongoose.Schema

const roomSchema = new Schema ({
    title : {
        type: String,
        require:true,
    },
    price : {
        type : Number,
        require : true,
    },
    maxPeople : {
        type: Number,
        require: true,
    },
    desc : {
        type: String,
        require :true,
    },
    roomNumbers : {
        type : Array,
        require: true
    },
    createdAt : {
        type : Date,
        require: true
    },
})

module.exports = mongoose.model('Room', roomSchema)