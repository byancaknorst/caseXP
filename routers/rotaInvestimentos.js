const express = require('express');

const rotaInvestimentos = express.Router();
const controllerInvestimentosComprar = require('../controllers/controllerInvestimentosComprar');
const { validarCodCliente, codAtivo, qtdeAtivo } = require('../middlewares/validarRequisicaoCompra');
const controllerInvestimentosVender = require('../controllers/controllerInvestimentosVender');

rotaInvestimentos.post('/comprar', validarCodCliente, codAtivo, qtdeAtivo, controllerInvestimentosComprar.comprarAtivo);

/**
 * @swagger
 * /investimentos/comprar:
 *   post:
 *     tags: [Investimentos]
 *     description: Comprar ativo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codCliente:
 *                 typer: integer
 *               codAtivo:
 *                 typer: integer
 *               qtdeAtivo:
 *                 typer: integer
 *             example:
 *              codCliente: 2
 *              codAtivo: 8
 *              qtdeAtivo: 2
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idAcao: 
 *                   type: integer
 *                 idUsuario: 
 *                   type: integer
 *                 quantidade: 
 *                   type: integer
 *                 flagCompraVenda: 
 *                   type: boolean
 *
 */

rotaInvestimentos.post('/vender', validarCodCliente, codAtivo, qtdeAtivo, controllerInvestimentosVender.venderAtivo);

/**
 * @swagger
 * /investimentos/vender:
 *   post:
 *     tags: [Investimentos]
 *     description: Vender ativo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codCliente:
 *                 typer: integer
 *               codAtivo:
 *                 typer: integer
 *               qtdeAtivo:
 *                 typer: integer
 *             example:
 *              codCliente: 2
 *              codAtivo: 1
 *              qtdeAtivo: 1
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idAcao: 
 *                   type: integer
 *                 idUsuario: 
 *                   type: integer
 *                 quantidade: 
 *                   type: integer
 *                 flagCompraVenda: 
 *                   type: boolean
 *
 */

module.exports = rotaInvestimentos;