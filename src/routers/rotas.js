const express = require('express')
const fernanda = require('../controllers/fernanda')
const carros = require('../controllers/carros')

const rota = express()

rota.get('/fernanda', fernanda)

rota.get('/carros', carros)

module.exports = rota
