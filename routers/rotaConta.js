const express = require('express');

const rotaConta = express.Router();
const controllerContaDeposito = require('../controllers/controllerContaDeposito');
const { validarCodCliente } = require('../middlewares/validarRequisicaoCompra');
const { validarValor } = require('../middlewares/validarValor');
const controllerContaSaque = require('../controllers/controllerContaSaque')
const controllerConta = require('../controllers/controllerConta');

rotaConta.post('/deposito', validarValor, validarCodCliente,  controllerContaDeposito.depositar);

/**
 * @swagger
 * /conta/deposito:
 *   post:
 *     tags: [Conta]
 *     description: Deposito de valor na conta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codCliente:
 *                 type: integer
 *               valor:
 *                 type: decimal
 *             example:
 *              codCliente: 2
 *              valor: 60.20 
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *               valor:
 *                 type: decimal
 *
 */

rotaConta.post('/saque', validarValor, validarCodCliente,  controllerContaSaque.sacar);

/**
 * @swagger
 * /conta/saque:
 *   post:
 *     tags: [Conta]
 *     description: Saque de valor na conta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codCliente:
 *                 type: integer
 *               valor:
 *                 type: decimal
 *             example:
 *               codCliente: 2
 *               valor: 60.20 
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *               valor:
 *                 type: decimal
 */

rotaConta.get('/:codCliente', controllerConta.consultar);

/**
 * @swagger
 * /conta/{codCliente}:
 *   get:
 *     tags: [Conta]
 *     description: Consultar o valor na conta do cliente pelo codigo passado por parametro
 *     parameters:
 *       - in: path
 *         name: codCliente
 *         type: integer
 *         required: true
 *     example:
 *       codCliente: 2
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               properties:
 *               codCliente:
 *                 type: integer
 *               valor:
 *                 type: decimal
 */

module.exports = rotaConta;

