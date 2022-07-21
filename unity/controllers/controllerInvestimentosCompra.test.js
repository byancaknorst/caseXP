const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceComprar');
const controllerConta = require('../../controllers/controllerInvestimentosComprar');
const request = {};
const response = {};

const retornoInvestimentoCompra = {
	"idAcao": 10,
	"idUsuario": 2,
	"quantidade": 2,
	"flagCompraVenda": 1
};

describe('Testando controller da rota investimento', () => {
  describe('Testando compra de investimento', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceConta, 'serviceComprar').resolves(retornoInvestimentoCompra);
    });
    afterEach(() => {
      serviceConta.serviceComprar.restore();
    });
    it('Retorna saldo do cliente', async () => {
      request.body = {
        "codCliente": 2,
        "codAtivo": 3,
        "qtdeAtivo": 5
      };
      await controllerConta.comprarAtivo(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
});
