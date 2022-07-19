const modelAtivos = require('../models/modelAtivos');

const consultaPorCliente = async (codCliente) => {
  const resConsulta = await modelAtivos.consultaCliente(codCliente);
  const teste = {};
  for ( let i = 0; i < resConsulta.length; i++ ) {
    teste[resConsulta[i].codAtivo] = {
      codCliente: resConsulta[i].codCliente,
      codAtivo: resConsulta[i].codAtivo,
      qtdeAtivo: resConsulta[i].qtdeAtivo + (teste[resConsulta[i].codAtivo] ? teste[resConsulta[i].codAtivo].qtdeAtivo : 0),
      valor: resConsulta[i].valor
    }
  }
  const objRetorno = Object.keys(teste).map(key => {
    return teste[key];
  });
  return objRetorno;
}

const consultaPorAtivo = async (ticker) => {
  const resConsulta = await modelAtivos.consultaAtivo(ticker);
  return resConsulta;
};


module.exports = { consultaPorCliente, consultaPorAtivo };