const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hotelSchema = new Schema ( {
    name: {
        type:String,
        require:true,
    },
    type : {
        type: String,
        require: true,
    },
    city : {
        type:String,
        require:true,
    },
    address : {
        type:String,
        require:true,
    },
    distance : {
        type : Number,
        require:true,
    },
    photos: {
        type: Array,
        require: true,
    },
    desc : {
        type: String,
        require: true,
    },
    rating : {
        type : Number,
        require : true,
    },
    featured : {
        type : Boolean,
        require: true,
    },
    rooms : {
        type : Array,
        ref : 'Room',
        require : true
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)