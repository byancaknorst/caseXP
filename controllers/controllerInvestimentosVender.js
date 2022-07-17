const serviceVender = require('../services/serviceVender');

const venderAtivo = async (request, response) => {
  const { codCliente, codAtivo, qtdeAtivo } = request.body;
  const resultado = await serviceVender.serviceVender(codCliente, codAtivo, qtdeAtivo);
  return response.status(200).json(resultado);
}

module.exports = { venderAtivo };
