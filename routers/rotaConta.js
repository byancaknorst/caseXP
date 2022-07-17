const express = require('express');

const rotaConta = express.Router();
const controllerContaDeposito = require('../controllers/controllerContaDeposito');
const { validarCodCliente } = require('../middlewares/validarRequisicaoCompra');
const { validarValor } = require('../middlewares/validarValor');

rotaConta.post('/deposito', validarValor, validarCodCliente,  controllerContaDeposito.depositar);

module.exports = rotaConta;

