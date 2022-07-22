const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../db/index"); 
const modelConta = require("../../models/modelConta");

const resultadoSaldo = "O saldo do/a cliente BYAK é de R$ 398.89";

describe('Testando model conta', () => {
  describe('Testando função de consulta ao banco de dados', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves();
    });
    afterEach(() => {
      connection.execute.restore();
    });
    it('Deve retornar as informações de saldo do usuario', async() => {
      const resultado = await modelConta.consulta(2);
      expect(resultado).to.be.equal(resultadoSaldo);
    });
  });
});
