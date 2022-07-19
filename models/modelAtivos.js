const connection = require('../db/index');

const consultaCliente = async (codCliente) => {
  const query = `SELECT ac.idUsuario as codCliente,
  ac.idAcao as codAtivo,
  ac.quantidade as qtdeAtivo,
  a.valor as valor
  FROM heroku_e660f011b6edc5f.acao_usuario as ac 
  INNER JOIN heroku_e660f011b6edc5f.acao as a ON a.id = ac.idAcao
  WHERE ac.idUsuario = ?`;
  const result = await connection.query(query, [codCliente]);
  return result[0];
}

const consultaAtivo = async (codAtivo) => {
  const query = `SELECT a.id as codAtivo, a.quantidade as qtdeAtivo, a.valor as valor
  FROM acao as a WHERE id = ?`;
  const result = await connection.query(query, [codAtivo]);
  console.log(result);
  return result;
};

module.exports = { consultaCliente, consultaAtivo };