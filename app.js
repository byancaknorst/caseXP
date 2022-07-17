const express = require('express');

const app = express();
require('express-async-errors');
const { errMid } = require('./middlewares/error');
const indexRotas = require('./routers/index');

app.use(express.json());

app.get('/', (_request, response) => {
  response.send();
});

app.use(indexRotas);
app.use(errMid);

module.exports = app;
