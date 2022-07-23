const modelSaque = require('../models/modelSaque');

const saque = async (codCliente, valor) => {
  const resultado = await modelSaque.saque(codCliente, valor);
  return resultado;
}

module.exports = { saque }