<h1 align="center">Case XP</h1>

<p align="center">Esse repositório foi criado para o desenvolvimento do back end do desafio técnico para aplicação em uma vaga na XP Inc. Para o desenvolvimento deste aplicativo, foi usado Git, Node, Express, JavaScript, Eslint, Docker compose, Mocha e Chai. </p>

<p align="center">
  <a href="#Swagger">Swagger</a> •
  <a href="#Heroku">Heroku</a> •
  <a href="#Primeiros passos">Primeiros passos</a> •
  <a href="#Docker-Compose">Docker-Compose</a> •
  <a href="#Autora">Autora</a> 
</p>

---

## Swagger :bookmark_tabs:

A documentação da API está disponivel através desse [link](https://case-xp-backend.herokuapp.com/documentacaoAPI/).

---

## Heroku

A aplicação está disponivel através desse [link](https://case-xp-backend.herokuapp.com)

---

## Primeiros passos

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
=======
