const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

const restaurantRoutes = require('./routes/restaurant')
const feedbackRoutes = require('./routes/feedback')
const authRoutes = require('./routes/auth')

const app = express()
connectDB()
const PORT = process.env.PORT || 3004

app.use(cors())
app.use(express.json())

app.use('/api/restaurants', restaurantRoutes)
app.use('/api/feedback', feedbackRoutes)
app.use('/api/login', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
