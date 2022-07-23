const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Case XP API",
      description: "API com dados de ativos e ações para aplicação de case para a XP",
      version: "2.0"
    },
    servers: [{
      url: "http://localhost:3001",
      description: "Servidor local"
    }]
  },
  apis: ["./routers/*.js" ],
};

module.exports = swaggerConfig;