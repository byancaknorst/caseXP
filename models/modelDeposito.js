const connection = require('../db/index');

const depositar = async (codCliente, valor) => {
  const query = 'UPDATE usuario SET saldo = saldo + ? WHERE id = ?';
  await connection.execute(query, [valor, codCliente]);
  const confirmarDeposito = `Foram depositados ${valor} reais no seu saldo`;
  return confirmarDeposito;
}

module.exports = { depositar };