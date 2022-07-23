const serviceConta = require('../services/serviceConta');

const consultar = async (request, response) => {
  const { codCliente } = request.params;
  const resultado = await serviceConta.consulta(codCliente);
  return response.status(200).json(resultado);
}

module.exports = { consultar };