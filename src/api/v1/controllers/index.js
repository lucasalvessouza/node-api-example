const express = require('express')
const router = express.Router()


router.use('/auth', require('./authController'))

module.exports = router