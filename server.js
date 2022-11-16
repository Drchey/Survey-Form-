const express = require('express')
const config = require('config')
const connectDB = require('./config/db')

const app = express()

connectDB()
const port = config.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
