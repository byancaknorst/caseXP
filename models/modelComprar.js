const connection = require('../db/index');

const acoesDisponiveis = async () => {
  const [acoes] = await connection.execute('SELECT * FROM acao');
  return acoes;
}

const comprar = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO acao_usuario (idAcao, idUsuario, quantidade, flagCompraVenda) VALUES (?, ?, ?, ?)'
  await connection.execute(query, [codAtivo, codCliente, qtdeAtivo, 1]);
  const informaçõesInseridas = {
    idAcao: codAtivo,
    idUsuario: codCliente,
    quantidade: qtdeAtivo,
    flagCompraVenda: 1
  }
  return informaçõesInseridas;
}

const decrementoBD = async (qtdeDecremento, idAcao) => {
  const query = 'UPDATE acao SET quantidade = quantidade - ? WHERE id = ?';
  const [decre] = await connection.execute(query, [qtdeDecremento, idAcao]);
  console.log(decre);
}

module.exports = { acoesDisponiveis, comprar, decrementoBD };
