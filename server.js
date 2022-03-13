const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) // Processa o body em formato UrlEncoded
app.use(express.json()) // Processa o body em formato json

app.use((req, res, next) => {
    let data_req = new Date();
    console.log(`${data_req.toLocaleString()} - ${req.path} - ${req.get('content-type')}`);
    res.status(200).send('Eduardo Augusto Lima Pereira');
})

const PORTA = process.env.PORT || 3000 // Se não achar PORT definido como variável de ambiente, utilizar 3000
app.listen (PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
})