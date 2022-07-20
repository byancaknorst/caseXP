const express = require('express');

const rotaLogin = express.Router();

rotaLogin.get('/', controllerLogin.login);

module.exports = rotaLogin;