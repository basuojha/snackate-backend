const Restaurant = require('../models/restaurantModel')

const getRestaurantList = async (req, res) => {
  try {
    const restaurantList = await Restaurant.find()
    res.status(200).json(restaurantList)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params
    if (id) {
      const restaurant = await Restaurant.findOne({ id })
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' })
      }
      res.status(200).json(restaurant)
    } else {
      res.status(400).json({ message: 'Incorrect Params: No ID found' })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getRestaurantList, getRestaurantById }
