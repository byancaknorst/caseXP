function validarValor(req, res, next) {
  const { valor } = req.body;
  const regexValor = /^\d+(\.\d{1,2})?$/;
  if (!valor) {
    return res.status(400).json({ message: 'Valor não informado' });
  }
  if (!regexValor.test(valor)) {
    return res.status(400).json({ message: 'Valor deve ser um número decimal positivo' });
  }
  next();
}

module.exports = { validarValor };
