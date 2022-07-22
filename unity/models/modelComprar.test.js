const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const connection = require("../../db/index"); 
const modelComprar = require("../../models/modelComprar");

const resultadoAcoesDisponiveis = [
  { id: 1, ticker: 'ITSA4', quantidade: 1, valor: '78.64' },
  { id: 2, ticker: 'AZUL4', quantidade: 1, valor: '40.64' }
];

const retornoDaCompra = { idAcao: 10, idUsuario: 2, quantidade: 1, flagCompraVenda: 1 };

describe('Testando model de compra', () => {
  describe('Verifica ações disponiveis', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([resultadoAcoesDisponiveis]);
    })
    afterEach(() => {
      connection.execute.restore();
    });
    it('Verifica função de ações disponiveis', async () => {
      const resultado = await modelComprar.acoesDisponiveis();
      expect(resultado).to.be.eql(resultadoAcoesDisponiveis);
    })
  });
  describe('Testa a compra de um ativo', async () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves(retornoDaCompra);
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Deve retornar as informações da compra', async () => {
      const resultado = await modelComprar.comprar(2, 10, 1);
      expect(resultado).to.be.eql(retornoDaCompra);
    });
  });
  describe('Testa decremento', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves();
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Testa se a função decremento é executada', async () => {
      await modelComprar.decrementoBD(1, 10);
      expect(modelComprar.decrementoBD).calledOnceWith(1, 10);
      expect(modelComprar.decrementoBD).to.have.been.calledWith(1, 10);
    });
  });
});