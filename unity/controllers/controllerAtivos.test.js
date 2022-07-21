const sinon = require('sinon');
const { expect } = require('chai');
const serviceAtivos = require('../../services/serviceAtivos');
const controllerAtivos = require('../../controllers/controllerAtivos');
const request = {};
const response = {};

const retornoConsultaAtivo = [
	{
		"codAtivo": 10,
		"qtdeAtivo": 23,
		"valor": "41.71"
	}
];

const retornoConsultaCliente = [
	{
		"codCliente": 2,
		"codAtivo": 1,
		"qtdeAtivo": 5,
		"valor": "78.64"
	},
	{
		"codCliente": 2,
		"codAtivo": 2,
		"qtdeAtivo": 10,
		"valor": "40.64"
	}
];
  

describe('Testando controller de ativos', () => {
  describe('Testando consulta com parametro ativos', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceAtivos, 'consultaPorAtivo').resolves(retornoConsultaAtivo);
    });
    afterEach(() => {
      serviceAtivos.consultaPorAtivo.restore();
    });
    it('Retorna objeto no formato solicitado', async () => {
      request.body = { ticker: 'B3SA3'};
      await controllerAtivos.consultarAtivo(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  })
  describe('Testando consulta com parametro cliente', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(serviceAtivos, 'consultaPorCliente').resolves(retornoConsultaCliente);
    });
    afterEach(() => {
      serviceAtivos.consultaPorCliente.restore();
    });
    it('Retorna objeto no formato solicitado', async () => {
      request.params = { codCliente: 2 };
      await controllerAtivos.consultarCliente(request, response);
      expect(response.status.calledWith(200)).to.be.true;
    });
  })
});
