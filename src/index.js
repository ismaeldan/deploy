const express = require('express')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
  return res.json('Api esta ok!!')
})

app.listen(process.env.PORT)
