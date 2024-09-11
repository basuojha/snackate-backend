const express = require('express')
const {
  getRestaurantList,
  getRestaurantById
} = require('../controllers/restaurantController')

const router = express.Router()

router.get('/list', getRestaurantList)
router.get('/:id', getRestaurantById)

module.exports = router
