const express = require("express");
const routes = require('./routes');

const app = express();
const porta = 3333;

routes(app)

app.listen(porta, () => console.log("Servidor aberto na porta", porta));

module.exports = app;