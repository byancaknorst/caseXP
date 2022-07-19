const connection = require('../db/index');

const consulta = async (codCliente) => {
  const query = `SELECT * FROM usuario WHERE id = ?`;
  const resultado = await connection.query(query, [codCliente]);
  return `O saldo do/a cliente ${resultado[0][0].nomeUsuario} é de R$ ${resultado[0][0].saldo}`;
}

module.exports = { consulta };