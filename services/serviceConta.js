const modelConta = require('../models/modelConta');

const consulta = async (codCliente) => {
  const resultado = await modelConta.consulta(codCliente);
  return resultado;
}

module.exports = { consulta };