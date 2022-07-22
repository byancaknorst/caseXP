const connection = require('../db/index');

const consultaCliente = async (codCliente) => {
  const query = `SELECT ac.idUsuario as codCliente,
  ac.idAcao as codAtivo,
  ac.quantidade as qtdeAtivo,
  a.valor as valor
  FROM heroku_e660f011b6edc5f.acao_usuario as ac 
  INNER JOIN heroku_e660f011b6edc5f.acao as a ON a.id = ac.idAcao
  WHERE ac.idUsuario = ?`;
  const [result] = await connection.query(query, [codCliente]);
  console.log('resultadoooooooooo', result);
  console.log('resultado', result[0]);
  return result;
}

const consultaAtivo = async (ticker) => {
  const query = `SELECT a.id as codAtivo, a.quantidade as qtdeAtivo, a.valor as valor
  FROM acao as a WHERE ticker = ?`;
  const [result] = await connection.query(query, [ticker]);
  return result;
};

module.exports = { consultaCliente, consultaAtivo };