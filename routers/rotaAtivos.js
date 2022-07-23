const express = require('express');

const rotaAtivos = express.Router();
const controllerAtivos = require('../controllers/controllerAtivos');

rotaAtivos.get('/:codCliente', controllerAtivos.consultarCliente);

/**
 * @swagger
 * /ativos/{codCliente}:
 *   get:
 *     tags: [Ativos]
 *     description: Consultar os ativos na conta do cliente pelo codigo do mesmo passado por parametro
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
 *               type: array
 *               properties:
 *               codCliente:
 *                 type: integer
 *               codAtivo:
 *                 type: integer
 *               qtdeAtivo:
 *                 type: integer
 *               valor:
 *                 type: decimal
 */

rotaAtivos.get('/', controllerAtivos.consultarAtivo);

/**
 * @swagger
 * /ativos:
 *   get:
 *     tags: [Ativos]
 *     description: Consultar informações dos ativos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticker:
 *                 type: string
 *             example:
 *               ticker: 'B3SA3'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *               codAtivo: integer
 *               qtdeAtivo: integer
 *               valor: decimal
 */

module.exports = rotaAtivos;