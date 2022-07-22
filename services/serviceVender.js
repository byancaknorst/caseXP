const modelVender = require('../models/modelVender');
const modelComprar = require('../models/modelComprar')

const serviceVender = async ( codCliente, codAtivo, qtdeAtivo )  => {
  const disponiveis = await modelComprar.acoesDisponiveis();
  const ativo = disponiveis.find(ativo => ativo.id === codAtivo);
  if (!ativo) {
    throw {code: 404, message: 'Ativo não encontrado'};
  }
  const verificarQuantidadeDisponivel = await modelVender.verificarQuantidadeDisponivel(codCliente, codAtivo);
  console.log('VERIFICANDO QTDADE', verificarQuantidadeDisponivel[0].quantidade);
  if (verificarQuantidadeDisponivel[0].quantidade < qtdeAtivo) {
    throw {code: 400, message: 'Quantidade indisponível'};
  }
  const vender = await modelVender.vender(codCliente, codAtivo, qtdeAtivo);
  await modelVender.incrementoBD(qtdeAtivo, codAtivo);
  console.log('VENDENDO', vender);
  return vender;
}

module.exports = { serviceVender };
