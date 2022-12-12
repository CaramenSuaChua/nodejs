const User = require('../model/user')
const Transaction = require('../model/transaction')
exports.postUser = (req, res, next) => {
    const name = req.body.name
    const password = req.body.password
    // const phoneNumber = req.body.phoneNumber
    // const email = req.body.email
    // const fullname = req.body.fullname
    // const isAdmin = req.body.isAdmin
    User.findOne({ name : name}).then(user => {
        if(!user){
            const newUser = new User({
                name : name,
                password : password,
                // fullname : fullname,
                // phoneNumber : phoneNumber,
                // email : email,
                isAdmin : true,
            })
            newUser.save()
            res.status(200).send({
                results: newUser,
                message: 'Created User Successfully'
            })
        } else {
            res.status(400).send('Username existed')
        }
    })
}

exports.postLogin = (req, res, next) => {
    const name = req.body.name
    const password = req.body.password
    // const phoneNumber = req.body.phoneNumber
    // const email = req.body.email
    const fullname = req.body.fullname
    const isAdmin = req.body.isAdmin
    User.findOne({ name : name}).then(user => {
        if(user ){
            if(user.password !== password){
                res.status(200).send({
                    message: 'Password Wrong'
                })
            } 
            res.status(200).send({
                results : user,
                message: 'Login Successfully'
            })
        } else {
            res.status(200).send({
                message: 'Username not existed'
            })
        }
    })
}

exports.adminLogin = (req, res, next) => {
    const {name, password} = req.body
    User.find({name: name})
        .then(user => {
            if(user.length > 0) {
                if(user[0].password === password){
                    req.user = user[0]
                    if(user[0].isAdmin){
                        return res.status(200).send({
                            'results' : user[0],
                            'message' : "Login Succesfully"
                        })
                    } else {
                        return res.status(203).send({message : 'User Not Admin'})
                    }
                } else {
                    return res.status(203).send({ message: 'Password Is Not Correct' });
                }
            } else {
                return res.status(203).send({ message: 'UserName Is Not Exist' });
            }
        })
        .catch(err => console.log(err))
}

exports.adminDashBoard = (req, res, next) => {
    User.find()
    .then(user => {
        res.send({
            'user' : user.length
        })
    })
}

exports.adminTranDashBoard = (req, res, next) => {
    Transaction.find()
        .then(tran => {
            total = 0
            a = tran.filter(t => t.status === 'Booked')
            c = tran.forEach(t => {
                return total+= t.price
            })
           res.send({
            'order' : a.length,
            'tran' : tran,
            'earning' : total,
            'balance' : total/12
           })
        })
}