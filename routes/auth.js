const express = require('express')
const { verifyLoginToken } = require('../controllers/authController')

const router = express.Router()
router.post('/verify', verifyLoginToken)

module.exports = router
