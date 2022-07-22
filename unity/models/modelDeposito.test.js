const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../db/index"); 
const modelDeposito = require("../../models/modelDeposito");

const infosDeposito = "Foram depositados 10.9 reais no seu saldo"

describe('Testando model de deposito', () => {
  describe('Testa função que realiza deposito', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(infosDeposito);
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Deve retornar informações sobre o deposito', async () => {
      const codCliente = 2;
      const valor = 10.90;
      const resultado = await modelDeposito.depositar(codCliente, valor);
      expect(resultado).to.be.equal(infosDeposito);
    });
  });
});