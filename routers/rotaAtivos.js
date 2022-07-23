const express = require('express');

const rotaAtivos = express.Router();
const controllerAtivos = require('../controllers/controllerAtivos');

rotaAtivos.get('/ativos/:ticker', controllerAtivos.consultarAtivo);

/**
 * @swagger
 * /ativos/ativos/{ticker}:
 *   get:
 *     tags: [Ativos]
 *     description: Consultar os ativos na conta do cliente pelo codigo do mesmo passado por parametro
 *     parameters:
 *       - in: path
 *         name: ticker
 *         type: string
 *         required: true
 *     example:
 *       ticker: B3SA3
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *               codAtivo:
 *                 type: integer
 *               qtdeAtivo:
 *                 type: integer
 *               valor:
 *                 type: decimal
 */

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

module.exports = rotaAtivos;