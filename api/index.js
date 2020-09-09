const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())


app.get('/teste', (req, res) => res.status(200).send({mensagem: 'boas-vindas à API'}))

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

module.exports = app