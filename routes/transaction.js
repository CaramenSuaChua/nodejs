const express = require('express')
const router = express.Router()
const transRouter = require('../controller/transaction')

router.post('/transaction', transRouter.postTransaction)

router.get('/transaction', transRouter.getTransaction)

router.get('/transactions', transRouter.getAllTransaction)

module.exports = router