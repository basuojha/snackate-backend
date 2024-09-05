const express = require('express')
const { getRestaurantList } = require('../controllers/restaurantController')

const router = express.Router()

router.get('/list', getRestaurantList)

module.exports = router
