const sinon = require('sinon');
const { expect } = require('chai');
const serviceAtivos = require('../../services/serviceAtivos');
const modelAtivos = require('../../models/modelAtivos');

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

describe("Testando o service de ativos", () => {
  describe("Testando a consulta por cliente", () => {
    beforeEach(async () => {
      sinon.stub(modelAtivos, "consultaCliente").resolves([retornoConsultaCliente]);
    });
    afterEach(async () => {
      modelAtivos.consultaCliente.restore();
    });
    it('Deve retornar um objeto com as informações dos ativos do cliente', () => {
      const codCliente = 2;
      const retorno = serviceAtivos.consultaPorCliente(codCliente);
      expect(retorno).to.be.eql(retornoConsultaCliente);
    })
  });
  describe("Testando a consulta por ativo", () => {
    beforeEach(async () => {
      sinon.stub(modelAtivos, "consultaAtivo").resolves([retornoConsultaCliente]);
    });
    afterEach(async () => {
      modelAtivos.consultaAtivo.restore();
    });
    it('Deve retornar um objeto com as informações dos ativos do cliente', () => {
      const ticker = 10;
      const retorno = serviceAtivos.consultaPorAtivo(ticker);
      expect(retorno).to.be.eql(retornoConsultaAtivo);
    })
  });
});
