const express = require('express');

const rotaInvestimentos = express.Router();
const controllerInvestimentosComprar = require('../controllers/controllerInvestimentosComprar');
const { validarCodCliente, codAtivo, qtdeAtivo } = require('../middlewares/validarRequisicaoCompra');
const controllerInvestimentosVender = require('../controllers/controllerInvestimentosVender');

rotaInvestimentos.post('/comprar', validarCodCliente, codAtivo, qtdeAtivo, controllerInvestimentosComprar.comprarAtivo);
rotaInvestimentos.post('/vender', validarCodCliente, codAtivo, qtdeAtivo, controllerInvestimentosVender.venderAtivo);

module.exports = rotaInvestimentos;