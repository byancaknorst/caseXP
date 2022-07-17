const { errObj } = require('../middlewares/error');
const modelComprar = require('../models/modelComprar');

const serviceComprar = async ( codCliente, codAtivo, qtdeAtivo )  => {
  const disponiveis = await modelComprar.acoesDisponiveis();
  const ativo = disponiveis.find(ativo => ativo.id === codAtivo);
  if (!ativo) {
    console.log('Ativo não encontrado');
    throw {code: 404, message: 'Ativo não encontrado'};
  }
  const qtdeDisponivel = ativo.quantidade;
  console.log('qtde', qtdeDisponivel);
  if (qtdeAtivo > qtdeDisponivel) {
    throw {code: 400, message: 'Quantidade indisponível'};
  };
  const compra = await modelComprar.comprar(codCliente, codAtivo, qtdeAtivo);
  // console.log('compra', compra);
  const qtdDecremento = compra.quantidade;
  const idAcao = compra.idAcao;
  await modelComprar.decrementoBD(qtdDecremento, idAcao);
  return compra;
}

module.exports = { serviceComprar };
