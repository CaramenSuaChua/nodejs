const Transaction = require('../model/transaction')
exports.postTransaction = (req, res, next) => {
    const data = req.body
    const transaction = new Transaction({
        user : data.user,
        hotel : data.hotel,
        room : data.room,
        dateStart : data.date[0].startDate,
        dateEnd : data.date[0].endDate,
        price : data.totalPrice,
        payment : data.payment,
        status : 'Booked'
    })
    transaction.save()
    res.status(200).send({
        "message" : "Creadted Succesfully"
    })
}

exports.getTransaction = (req, res, next) => { 
    const user = req.query.user
    Transaction.find({user : user}).populate('hotel')
    .then(results => {
    res.status(200).send(results)
    })
}

exports.getAllTransaction = (req, res, next) => { 
    Transaction.find().populate('hotel')
    .then(results => {
    res.status(200).send(results)
    })
}
