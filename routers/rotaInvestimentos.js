const express = require('express');

const rotaInvestimentos = express.Router();
const controllerInvestimentosComprar = require('../controllers/controllerInvestimentosComprar');
const { validarCodCliente, codAtivo, qtdeAtivo } = require('../middlewares/validarRequisicaoCompra');

rotaInvestimentos.post('/comprar', validarCodCliente, codAtivo, qtdeAtivo, controllerInvestimentosComprar.comprarAtivo);
rotaInvestimentos.post('/vender');

module.exports = rotaInvestimentos;