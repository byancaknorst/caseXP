const connection = require('../db/index');

const saque = async (codCliente, valor) => {
  const query = 'UPDATE usuario SET saldo = saldo - ? WHERE id = ?';
  await connection.execute(query, [valor, codCliente]);
  const confirmarSaque = `Foram sacados ${valor} reais no seu saldo`;
  return confirmarSaque;
}

module.exports = { saque };