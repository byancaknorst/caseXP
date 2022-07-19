const express = require('express');

const rota = express.Router();
const rotaInvestimentos = require('./rotaInvestimentos');
const rotaConta = require('./rotaConta');
const rotaAtivos = require('./rotaAtivos');

rota.use('/investimentos', rotaInvestimentos);
rota.use('/conta', rotaConta);
rota.use('/ativos', rotaAtivos);

module.exports = rota;
