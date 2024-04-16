const knex = require('../database/connection')

const carros = async (req, res) => {
  try {
    const carros = await knex('carro')

    return res.status(200).json(carros)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro interno do servidor' })
  }
}

module.exports = carros
