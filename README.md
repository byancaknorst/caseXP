<h1 align="center">Case XP</h1>

<p align="center">Esse repositório foi criado para o desenvolvimento do back end do desafio técnico para aplicação em uma vaga na XP Inc. Para o desenvolvimento deste aplicativo, foi usado Git, Node, Express, JavaScript, Eslint, Docker compose, Mocha e Chai. </p>

<p align="center">
  <a href="#Explicação do projeto">Explicação do projeto</a> •
  <a href="#Swagger">Swagger</a> •
  <a href="#Heroku">Heroku</a> •
  <a href="#Primeiros passos">Primeiros passos</a> •
  <a href="#Docker-Compose">Docker-Compose</a> •
  <a href="#Autora">Autora</a> 
</p>

---

## Explicação do projeto

Para essa aplicação utilizei um banco de dados relacional, o MySql. Tentei fazer a estrutura mais simples possivel para que ficasse leve, e utilizei querys para as buscas onde pude obter todas as informações necessárias para retornar o que era solicitado. O banco de dados consiste em uma tabela com informações do usuario, outra com informações dos ativos disponiveis e uma intermediaria dessas duas.

<img src="bancoDeDados.png" alt="Diagrama do banco de dados" />

A arquitetura da aplicação foi feita com base no modelo MSC, onde temos 3 camadas que são Model, Service e Controller. 

Tomei a liberdade de mudar alguns retornos para string, devolvendo ao usuário uma frase contendo as informações que precisa e facilitando o entendimento.

---

## Swagger :bookmark_tabs:

A documentação da API está disponivel através desse [link](https://case-xp-backend.herokuapp.com/documentacaoAPI/).

---

## Heroku

A aplicação está disponivel através desse [link](https://case-xp-backend.herokuapp.com)

---

## Primeiros passos

Será necessário que a porta 3001 esteja disponível para a aplicação e o MySQL usará a porta 3306.

Faça o clone do repositório utilizando o comando abaixo

```bash
git clone git@github.com:byancaknorst/caseXP.git
```

Entrar no diretório da aplicação

```bash
cd caseXP
```

Instale as dependências

```bash
npm install
```

Implemente o banco de dados

```bash
npm run restore
```

Rode a aplicação

```bash
npm run dev
```

---

## Docker compose

Você precisa ter instalado as seguintes ferramentas: [Git](https://git-scm.com), [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/install/).

Faça o clone do repositório utilizando o comando abaixo

```bash
git clone git@github.com:byancaknorst/caseXP.git
```

Entrar no diretório da aplicação

```bash
cd caseXP
```

Executar o docker-compose

```bash
docker-compose up -d
```

Execute o container

```bash
docker exec -it caseXP bash
```
Instale as dependências

```bash
npm install
```

Implemente o banco de dados

```bash
npm run restore
```

Rode a aplicação

```bash
npm run dev
```
Caso deseje parar o container

```bash
docker-compose down
```

---

## Autora

- [@byancaknorst](https://www.github.com/byancaknorst)
