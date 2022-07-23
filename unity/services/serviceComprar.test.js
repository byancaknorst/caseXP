const sinon = require('sinon');
const { expect } = require('chai');
const serviceComprar = require('../../services/serviceComprar');
const modelComprar = require('../../models/modelComprar');

const retornoCompraAtivo = [
	{
    "idAcao": 10,
    "idUsuario": 2,
    "quantidade": 2,
    "flagCompraVenda": 1
  }
];

const retornoDisponiveis = [{ id: 10, ticker: 'B3SA3', quantidade: 21, valor: '41.71' }];

describe("Testando o service de comprar", () => {
  describe("Testando a consulta por cliente", () => {
    beforeEach(async () => {
      sinon.stub(modelComprar, "acoesDisponiveis").resolves(retornoDisponiveis)
      sinon.stub(modelComprar, "comprar").resolves(retornoCompraAtivo);
      sinon.stub(modelComprar, "decrementoBD").resolves();
    });
    afterEach(async () => {
      modelComprar.acoesDisponiveis.restore();
      modelComprar.comprar.restore();
      modelComprar.decrementoBD.restore();
    });
    it('Deve retornar as informações relacionadas a compra de ativos que o usuario fez', async() => {
      const resultado = await serviceComprar.serviceComprar(2, 10, 2);
      expect(resultado).to.be.eql(retornoCompraAtivo);
    });
  });
});
