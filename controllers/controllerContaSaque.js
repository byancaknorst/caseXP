const serviceSaque = require('../services/serviceSaque');

const sacar = async (request, response) => {
  console.log(request.body);
  const { codCliente, valor } = request.body;
  const resultado = await serviceSaque.saque(codCliente, valor);
  return response.status(200).json(resultado);
}

module.exports = { sacar };