const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swagger.config.js');
const cors = require('cors');

const app = express();
require('express-async-errors');
const { errMid } = require('./middlewares/error');
const indexRotas = require('./routers/index');

app.use(cors());
app.use(express.json());

const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use("/documentacaoAPI", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (_request, response) => {
  response.send();
});

app.use(indexRotas);
app.use(errMid);

module.exports = app;
