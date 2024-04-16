require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rota = require('./routers/rotas')

const app = express()

app.use(cors())

app.use(express.json())

app.use(rota)

app.listen(process.env.PORT)
