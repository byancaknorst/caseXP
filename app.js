const express = require('express');

const app = express();
// const indexRoutes = require('./routers/index');

app.use(express.json());

app.get('/', (_request, response) => {
  response.send('Hello World!');
});
// app.use(indexRoutes);

module.exports = app;
