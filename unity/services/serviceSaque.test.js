const sinon = require('sinon');
const { expect } = require('chai');
const serviceSaque = require('../../services/serviceSaque');
const modelSaque = require('../../models/modelSaque');

const infosSaque = "Foram sacados 0.9 reais no seu saldo";

describe('Testando service de saque', () => {
  describe('Verifica função saque', () => {
    beforeEach(() => {
      sinon.stub(modelSaque, 'saque').resolves(infosSaque);
    });
    afterEach(() => {
      modelSaque.saque.restore();
    });
    it('Deve retornar informações referentes ao saque', async () => {
      const codCliente = 2;
      const valor = 0.90;
      const resultado = await serviceSaque.saque(codCliente, valor);
      expect(resultado).to.be.equal(infosSaque);
    })
  });  
});