'use strict' // força o javascript s ser mais severo com erros

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Cerrega as rotas
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productsRoute);

module.exports = app;
