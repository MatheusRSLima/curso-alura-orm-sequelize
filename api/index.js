const express = require('express')
const routes = require('./routes')
const app = express()

routes(app)

const porta = 3000
app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))

module.exports = app