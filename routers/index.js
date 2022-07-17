const express = require('express');

const rota = express.Router();
const rotaInvestimentos = require('./rotaInvestimentos');
const rotaConta = require('./rotaConta');

rota.use('/investimentos', rotaInvestimentos);
rota.use('/conta', rotaConta);

module.exports = rota;
