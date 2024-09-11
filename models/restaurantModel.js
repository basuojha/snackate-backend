const mongoose = require('mongoose')

const customizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  options: { type: [String], required: false },
  price: { type: Number, required: false }
})

const menuItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  calories: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },
  discountPercent: { type: Number, required: true },
  itemPhoto: { type: String, required: true },
  itemDescription: { type: String, required: true },
  customizable: { type: Boolean, required: true },
  customizations: { type: [customizationSchema], required: false } // Referencing the customizationSchema
})

const restaurantSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  timeForDelivery: { type: Number, required: true },
  imgSrc: { type: String, required: true },
  rating: { type: Number, required: true },
  priceForTwo: { type: Number, required: true },
  cuisine: { type: [String], required: true },
  address: { type: String, required: true },
  discount: { type: Number, required: true },
  menu: { type: [menuItemSchema], required: true } // Referencing the menuItemSchema
})
const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
