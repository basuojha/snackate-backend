const express = require('express')
const cors = require('cors')

const restaurantRoutes = require('./routes/restaurant')

const app = express()
const PORT = process.env.PORT || 3004

app.use(cors())
app.use(express.json())

app.use('/api/restaurants', restaurantRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
