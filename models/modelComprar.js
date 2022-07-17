const connection = require('../db/index');

const acoesDisponiveis = async () => {
  const [acoes] = await connection.execute('SELECT * FROM acao');
  return acoes;
}

const comprar = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO acao_usuario (idAcao, idUsuario, quantidade, flagCompraVenda) VALUES (?, ?, ?, ?)'
  const [result] = await connection.execute(query, [codAtivo, codCliente, qtdeAtivo, 1]);
  return result;
}

module.exports = { acoesDisponiveis, comprar };
