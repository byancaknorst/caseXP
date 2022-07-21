const sinon = require('sinon');
const { expect } = require('chai');
const serviceConta = require('../../services/serviceVender');
const controllerConta = require('../../controllers/controllerInvestimentosVender');
const request = {};
const response = {};

const retornoInvestimentoVender = {
	"idAcao": 2,
	"idUsuario": 2,
	"quantidade": 1,
	"flagCompraVenda": 0
};

describe('Testando controller da rota investimento', () => {
  describe('Testando venda de investimento', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceConta, 'serviceVender').resolves(retornoInvestimentoVender);
    });
    afterEach(() => {
      serviceConta.serviceVender.restore();
    });
    it('Retorna saldo do cliente', async () => {
      request.body = {
        "codCliente": 2,
        "codAtivo": 2,
        "qtdeAtivo": 1
      };
      await controllerConta.venderAtivo(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  });
});
