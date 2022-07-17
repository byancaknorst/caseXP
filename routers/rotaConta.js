const express = require('express');

const rotaConta = express.Router();
const controllerContaDeposito = require('../controllers/controllerContaDeposito');
const { validarCodCliente } = require('../middlewares/validarRequisicaoCompra');
const { validarValor } = require('../middlewares/validarValor');
const controllerContaSaque = require('../controllers/controllerContaSaque')

rotaConta.post('/deposito', validarValor, validarCodCliente,  controllerContaDeposito.depositar);
rotaConta.post('/saque', validarValor, validarCodCliente,  controllerContaSaque.sacar);

module.exports = rotaConta;

