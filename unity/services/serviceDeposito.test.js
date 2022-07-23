const sinon = require('sinon');
const { expect } = require('chai');
const serviceDeposito = require('../../services/serviceDeposito');
const modelDeposito = require('../../models/modelDeposito');

const infosDeposito = "Foram depositados 10.9 reais no seu saldo"

describe('Testando service de deposito', () => {
  describe('Verifica função deposito', () => {
    beforeEach(() => {
      sinon.stub(modelDeposito, 'depositar').resolves(infosDeposito);
    });
    afterEach(() => {
      modelDeposito.depositar.restore();
    });
    it('Deve retornar informações sobre o deposito', async () => {
      const codCliente = 2;
      const valor = 10.90;
      const resultado = await serviceDeposito.deposito(codCliente, valor);
      expect(resultado).to.be.equal(infosDeposito);
    });
  });
});