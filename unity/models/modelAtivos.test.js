const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../db/index"); 
const productModel = require("../../models/modelAtivos");

const retornoConsultaAtivo = [
  { 
    codAtivo: 10, 
    qtdeAtivo: 15, 
    valor: '41.71' 
  } 
];

const retornoConsultaCliente = {
  codCliente: 2,
  codAtivo: 10,
  qtdeAtivo: 2,
  valor: '41.71'
}

describe('Testando o model da rota Ativos', () => {
  describe('Testando a consulta dos ativos', () => {
    beforeEach(() => {
      sinon.stub(connection, "execute").resolves();
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Verifica função consulta ativo', async () => {
      const resultado = await productModel.consultaAtivo('B2SA3');
      expect(resultado).to.be.eql(retornoConsultaAtivo);
    });
  });
  describe('Testando a consulta do cliente', () => {
    beforeEach(() => {
      sinon.stub(connection, "execute").resolves();
    })
    afterEach(() => {
      connection.execute.restore();
    });
    it('Verifica função consulta cliente', async () => {
      const resultado = await productModel.consultaCliente(2);
      expect(resultado).to.be.eql(retornoConsultaCliente);
    }).timeout(5000);
  });
});