const modelDeposito = require('../models/modelDeposito');

const deposito = async (codCliente, valor) => {
  const resultado = await modelDeposito.depositar(codCliente, valor);
  return resultado;
}

module.exports = { deposito };