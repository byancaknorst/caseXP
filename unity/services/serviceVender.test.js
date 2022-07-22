const sinon = require('sinon');
const { expect } = require('chai');
const serviceVender = require('../../services/serviceVender');
const modelVender = require('../../models/modelVender');
const modelComprar = require('../../models/modelComprar');

const retornoDisponiveis = [{
  id: 10,
  ticker: 'B3SA3',
  quantidade: 21,
  valor: '41.71'
}];

const retornoInfosVenda = { idAcao: 10, idUsuario: 2, quantidade: 2, flagCompraVenda: 0 };

describe('Testando o service de vender', () => {
  describe('Testando função de venda', () => {
    beforeEach(() => {
      sinon.stub(modelComprar, "acoesDisponiveis").resolves(retornoDisponiveis)
      sinon.stub(modelVender, "verificarQuantidadeDisponivel").resolves(11);
      sinon.stub(modelVender, "vender").resolves(retornoInfosVenda);
      sinon.stub(modelVender, "incrementoBD").resolves();
    });
    afterEach(() => {
      modelComprar.acoesDisponiveis.restore();
      modelVender.verificarQuantidadeDisponivel.restore();
      modelVender.vender.restore();
      modelVender.incrementoBD.restore();
    });
    it('Deve retornar informações relacionadas a venda de ativos que o usuario fez', async() => {
      const resultado = await serviceVender.serviceVender(2, 10, 2);
      expect(resultado).to.be.eql(retornoInfosVenda);
    });
  });
});





