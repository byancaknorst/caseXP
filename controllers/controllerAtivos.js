const serviceAtivos = require('../services/serviceAtivos');

const consultarCliente = async (request, response) => {
  const { codCliente } = request.params;
  const retorno = await serviceAtivos.consultaPorCliente(codCliente);
  response.status(200).json(retorno);
}

const consultarAtivo = async (request, response) => {
  const { codAtivo } = request.params;
  console.log(codAtivo);
  const retorno = await serviceAtivos.consultaPorAtivo(codAtivo);
  response.status(200).json(retorno);
}

module.exports = { consultarCliente, consultarAtivo };
