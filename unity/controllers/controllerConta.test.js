const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceConta');
const controllerConta = require('../../controllers/controllerConta');
const request = {};
const response = {};

const retornoConsultaConta = "O saldo do/a cliente BYAK é de R$ 388.89";

describe('Testando controller de conta', () => {
  describe('Testando consulta conta', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceConta, 'consulta').resolves(retornoConsultaConta);
    });
    afterEach(() => {
      serviceConta.consulta.restore();
    });
    it('Retorna saldo do cliente', async () => {
      request.params = { codCliente: 2 };
      await controllerConta.consultar(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
});
