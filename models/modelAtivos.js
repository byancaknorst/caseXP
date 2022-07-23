const connection = require('../db/index');

const consultaCliente = async (codCliente) => {
  const query = `SELECT ac.idUsuario as codCliente,
  ac.idAcao as codAtivo,
  ac.quantidade as qtdeAtivo,
  a.valor as valor
  FROM acao_usuario as ac 
  INNER JOIN acao as a ON a.id = ac.idAcao
  WHERE ac.idUsuario = ?`;
  const result = await connection.execute(query, [codCliente]);
  return result[0];
}

const consultaAtivo = async (ticker) => {
  const query = `SELECT a.id as codAtivo, a.quantidade as qtdeAtivo, a.valor as valor
  FROM acao as a WHERE ticker = ?`;
  const [result] = await connection.execute(query, [ticker]);
  return result;
};

module.exports = { consultaCliente, consultaAtivo };