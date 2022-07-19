const express = require('express');

const rotaAtivos = express.Router();
const controllerAtivos = require('../controllers/controllerAtivos');

rotaAtivos.get('/:codCliente', controllerAtivos.consultarCliente);
rotaAtivos.get('/:codAtivo', controllerAtivos.consultarAtivo);

module.exports = rotaAtivos;