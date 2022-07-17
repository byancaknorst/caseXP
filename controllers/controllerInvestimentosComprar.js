const serviceComprar = require('../services/serviceComprar');


const comprarAtivo = async (request, response) => {
  const { codCliente, codAtivo, qtdeAtivo } = request.body;
  const resultado = await serviceComprar.serviceComprar(codCliente, codAtivo, qtdeAtivo);
  return response.status(200).json(resultado);
};

module.exports = { comprarAtivo };
