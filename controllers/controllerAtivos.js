const serviceAtivos = require('../services/serviceAtivos');

const consultarCliente = async (request, response) => {
  const { codCliente } = request.params;
  const retorno = await serviceAtivos.consultaPorCliente(codCliente);
  response.status(200).json(retorno);
}

const consultarAtivo = async (request, response) => {
  const { ticker} = request.body;
  const retorno = await serviceAtivos.consultaPorAtivo(ticker);
  console.log(retorno);
  response.status(200).json(retorno);
};

module.exports = { consultarCliente, consultarAtivo };
