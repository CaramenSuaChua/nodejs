const express = require('express')
const router = express.Router()

const userController = require('../controller/user')

router.post('/register', userController.postUser)

router.post('/login', userController.postLogin)

router.post('/adminLogin', userController.adminLogin)

router.get('/dashborad', userController.adminDashBoard)

router.get('/tran_dashborad', userController.adminTranDashBoard)

module.exports = router
