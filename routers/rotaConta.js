const express = require('express');

const rotaConta = express.Router();
const controllerContaDeposito = require('../controllers/controllerContaDeposito');
const { validarCodCliente } = require('../middlewares/validarRequisicaoCompra');
const { validarValor } = require('../middlewares/validarValor');
const controllerContaSaque = require('../controllers/controllerContaSaque')
const controllerConta = require('../controllers/controllerConta');

rotaConta.post('/deposito', validarValor, validarCodCliente,  controllerContaDeposito.depositar);
rotaConta.post('/saque', validarValor, validarCodCliente,  controllerContaSaque.sacar);
rotaConta.get('/:codCliente', controllerConta.consultar);

module.exports = rotaConta;

