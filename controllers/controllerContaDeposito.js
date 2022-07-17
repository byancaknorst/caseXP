const serviceDeposito = require('../services/serviceDeposito');

const depositar = async (request, response) => {
  console.log(request.body);
  const { codCliente, valor } = request.body;
  const resultado = await serviceDeposito.deposito(codCliente, valor);
  return response.status(200).json(resultado);
}

module.exports = { depositar };
