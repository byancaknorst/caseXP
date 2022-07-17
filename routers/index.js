const express = require('express');

const rota = express.Router();
const rotaInvestimentos = require('./rotaInvestimentos');


rota.use('/investimentos', rotaInvestimentos);

module.exports = rota;
