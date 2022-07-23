const express = require('express');

const rota = express.Router();
const rotaInvestimentos = require('./rotaInvestimentos');
const rotaConta = require('./rotaConta');
const rotaAtivos = require('./rotaAtivos');

rota.use('/investimentos', rotaInvestimentos);

/**
 * @swagger
 *  tags:
 *    name: Investimentos
 *    description: Rotas para investimentos
 */

rota.use('/conta', rotaConta);

/**
 * @swagger
 *  tags:
 *    name: Conta
 *    description: Rotas para conta
 */

rota.use('/ativos', rotaAtivos);

/**
 * @swagger
 *  tags:
 *    name: Ativos
 *    description: Rotas para ativos
 */

module.exports = rota;
