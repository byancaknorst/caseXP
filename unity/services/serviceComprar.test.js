// const sinon = require('sinon');
// const { expect } = require('chai');
// const serviceComprar = require('../../services/serviceComprar');
// const modelComprar = require('../../models/modelComprar');

// const retornoConsultaAtivo = [
// 	{
//     "idAcao": 10,
//     "idUsuario": 2,
//     "quantidade": 2,
//     "flagCompraVenda": 1
//   }
// ];

// const retornoDisponiveis = { id: 10, ticker: 'B3SA3', quantidade: 21, valor: '41.71' };

// const retornoConsultaConta = "O saldo do/a cliente BYAK é de R$ 388.89";

// describe("Testando o service de ativos", () => {
//   describe("Testando a consulta por cliente", () => {
//     beforeEach(async () => {
//       sinon.stub(modelComprar, "acoesDisponiveis").resolves(retornoDisponiveis)
//       sinon.stub(modelComprar, "comprar").resolves(retornoConsultaConta);
//     });
//     afterEach(async () => {
//       modelComprar.acoesDisponiveis.restore();
//       modelComprar.comprar.restore();
//     });
//     it('Deve retornar um objeto com as informações dos ativos do cliente', () => {
//       const codCliente = 2;
//       const codAtivo = 10;
//       const qtdeAtivo = 2;
//       const disponiveis = await modelComprar.acoesDisponiveis();
//       const retorno = serviceComprar.serviceComprar(codCliente, codAtivo, qtdeAtivo);
//       expect(disponiveis).to.be.eql(retornoDisponiveis);
//       expect(retorno).to.be.eql(retornoConsultaConta);
//     })
//   });
// });
