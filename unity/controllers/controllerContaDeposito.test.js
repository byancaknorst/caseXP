const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceDeposito');
const controllerConta = require('../../controllers/controllerContaDeposito');
const request = {};
const response = {};

const retornoContaDeposito = "Foram depositados 10.9 reais no seu saldo";

describe('Testando controller de conta', () => {
  describe('Testando deposito', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceConta, 'deposito').resolves(retornoContaDeposito);
    });
    afterEach(() => {
      serviceConta.deposito.restore();
    });
    it('Retorna saldo do cliente', async () => {
      request.body = {
        "codCliente": 2,
        "valor": 10.90
      };
      await controllerConta.depositar(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
});
