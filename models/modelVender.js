const connection = require('../db/index');

const verificarQuantidadeDisponivel = async (codCliente, codAtivo) => {
  const query = `SELECT u.id as idUsuario, ac.idAcao, SUM(ac.quantidade) as quantidade FROM
	heroku_e660f011b6edc5f.usuario AS u
    INNER JOIN heroku_e660f011b6edc5f.acao_usuario AS ac ON u.id = ac.idUsuario
    WHERE ac.idUsuario = ? AND ac.idAcao = ?
    GROUP BY ac.idAcao;`
  const [rows] = await connection.execute(query, [codCliente, codAtivo]);
  return rows; 
}

const vender = async (codCliente, codAtivo, qtdeAtivo) => {
  const query = 'INSERT INTO acao_usuario (idAcao, idUsuario, quantidade, flagCompraVenda) VALUES (?, ?, ?, ?)'
  await connection.execute(query, [codAtivo, codCliente, qtdeAtivo, 0]);
  const informaçõesInseridas = {
    idAcao: codAtivo,
    idUsuario: codCliente,
    quantidade: qtdeAtivo,
    flagCompraVenda: 0
  }
  return informaçõesInseridas;
}

const incrementoBD = async (qtdeAtivo, codAtivo) => {
  const query = 'UPDATE acao SET quantidade = quantidade + ? WHERE id = ?';
  await connection.execute(query, [qtdeAtivo, codAtivo]);
  // console.log(incre);
}

const decrementoDB = async (qtdeAtivo, codAtivo) => {
  const query = 'UPDATE acao SET quantidade = quantidade - ? WHERE id = ?';
  await connection.execute(query, [qtdeAtivo, codAtivo]);
}

module.exports = { verificarQuantidadeDisponivel, vender, incrementoBD, decrementoDB };