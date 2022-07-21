const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceSaque');
const controllerConta = require('../../controllers/controllerContaSaque');
const request = {};
const response = {};

const retornoContaSaque = "Foram sacados 0.9 reais no seu saldo";

describe('Testando controller de conta', () => {
  describe('Testando saque', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceConta, 'saque').resolves(retornoContaSaque);
    });
    afterEach(() => {
      serviceConta.saque.restore();
    });
    it('Retorna saldo do cliente', async () => {
      request.body = {
        "codCliente": 2,
        "valor": 0.90
      };
      await controllerConta.sacar(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
});
