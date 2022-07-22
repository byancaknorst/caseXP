const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../db/index"); 
const modelSaque = require("../../models/modelSaque");

const infosSaque = "Foram sacados 0.9 reais no seu saldo";

describe('Testando model de saque', () => {
  describe('Verifica função saque', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(infosSaque);
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Deve retornar informações referentes ao saque', async () => {
      const codCliente = 2;
      const valor = 0.90;
      const resultado = await modelSaque.saque(codCliente, valor);
      expect(resultado).to.be.equal(infosSaque);
    });
  });  
});
