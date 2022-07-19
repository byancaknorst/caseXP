const express = require('express');

const rotaAtivos = express.Router();
const controllerAtivos = require('../controllers/controllerAtivos');

rotaAtivos.get('/:codCliente', controllerAtivos.consultarCliente);
rotaAtivos.get('/', controllerAtivos.consultarAtivo);

module.exports = rotaAtivos;