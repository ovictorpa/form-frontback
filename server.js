const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true}))

app.post('/estudantes', (req, res, next) =>{

    console.log(req.body)
    res.send('Resposta Cadastrada com Sucesso')
})


app.listen(3003)
