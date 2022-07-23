const connection = require('../db/index');
require('dotenv').config();
// const { MYSQL_NAME } = process.env;

const verificarQuantidadeDisponivel = async (codCliente, codAtivo) => {
  const query = `SELECT u.id as idUsuario, ac.idAcao, SUM(ac.quantidade) as quantidade FROM
	usuario AS u
    INNER JOIN acao_usuario AS ac ON u.id = ac.idUsuario
    WHERE ac.idUsuario = ? AND ac.idAcao = ?
    GROUP BY u.id, ac.idAcao`;
  const query2 = 'SELECT id FROM usuario WHERE id = ?';
  const [rows] = await connection.execute(query, [codCliente, codAtivo]);
  console.log(rows);
  return rows; 
}

// verificarQuantidadeDisponivel(2, 1);

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