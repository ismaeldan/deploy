const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  return res.json('Fernanda Te amo')
})

app.listen(process.env.PORT)
