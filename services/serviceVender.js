const modelVender = require('../models/modelVender');
const modelComprar = require('../models/modelComprar')

const serviceVender = async ( codCliente, codAtivo, qtdeAtivo )  => {
  const disponiveis = await modelComprar.acoesDisponiveis();
  const ativo = disponiveis.find(ativo => ativo.id === codAtivo);
  if (!ativo) {
    throw {code: 404, message: 'Ativo não encontrado'};
  }
  
}

module.exports = { serviceVender };