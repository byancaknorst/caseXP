function validarCodCliente(req, res, next) {
  const { codCliente } = req.body;
  if (!codCliente) {
    return res.status(400).json({ message: 'Cliente não informado' });
  }
  if (typeof codCliente !== 'number') {
    return res.status(400).json({ message: 'Cliente deve ser um número' });
  }
  if (codCliente < 0) {
    return res.status(400).json({ message: 'Cliente deve ser maior que zero' });
  }
  next();
}

function codAtivo(req, res, next) {
  const { codAtivo } = req.body;
  if (!codAtivo) {
    return res.status(400).json({ message: 'Ativo não informado' });
  }
  if (typeof codAtivo !== 'number') {
    return res.status(400).json({ message: 'Ativo deve ser um número' });
  }
  next();
}

function qtdeAtivo(req, res, next) {
  const { qtdeAtivo } = req.body;
  if (!qtdeAtivo) {
    return res.status(400).json({ message: 'Quantidade não informada' });
  }
  if (typeof qtdeAtivo !== 'number') {
    return res.status(400).json({ message: 'Quantidade deve ser um número' });
  }
  if (qtdeAtivo < 0) {
    return res.status(400).json({ message: 'Quantidade deve ser maior que zero' });
  }
  next();
}

module.exports = { validarCodCliente, codAtivo, qtdeAtivo };
