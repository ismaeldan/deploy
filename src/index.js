require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', async (req, res) => {
  return res.json('Fernanda Te amo')
})

app.listen(process.env.PORT)
