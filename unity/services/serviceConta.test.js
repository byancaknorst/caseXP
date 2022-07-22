const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceConta');
const modelConta = require('../../models/modelConta');

const resultadoDaConsulta = "O saldo do/a cliente BYAK é de R$ 398.89";

describe('Testando service de conta', () => {
  describe('Verifica consulta pelo codigo do cliente', () => {
    beforeEach(() => {
      sinon.stub(modelConta, 'consulta').resolves(resultadoDaConsulta)
    });
    afterEach(() => {
      modelConta.consulta.restore();
    });
    it('Deve retornar um objeto', async () => {
      const resultado = await serviceConta.consulta(2);
      expect(resultado).to.be.equal(resultadoDaConsulta);
    });
  });
});