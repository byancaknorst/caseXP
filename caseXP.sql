DROP DATABASE IF EXISTS CaseXP;

CREATE DATABASE CaseXP;

USE CaseXP;

CREATE TABLE acao (
    id INT NOT NULL auto_increment,
    ticker VARCHAR(5) NOT NULL,
    quantidade INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE usuario (
    id INT NOT NULL auto_increment,
    nomeUsuario VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    saldo DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE acao_usuario (
    idAcao INT NOT NULL,
    idUsuario INT NOT NULL,
    quantidade INT NOT NULL,
    flagCompraVenda BOOLEAN NOT NULL,
    FOREIGN KEY (idAcao)
        REFERENCES acao (id)
        ON DELETE CASCADE,
    FOREIGN KEY (idUsuario)
        REFERENCES usuario (id)
        ON DELETE CASCADE
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;


insert into acao (id, ticker, quantidade, valor) values (1, 'ITSA4', 100, 78.64);
insert into acao (id, ticker, quantidade, valor) values (2, 'AZUL4', 200, 40.64);
insert into acao (id, ticker, quantidade, valor) values (3, 'PETR4', 300, 9.23);
insert into acao (id, ticker, quantidade, valor) values (4, 'VALE4', 400, 85.21);
insert into acao (id, ticker, quantidade, valor) values (5, 'WEGE3', 500, 44.02);
insert into acao (id, ticker, quantidade, valor) values (6, 'ABEV3', 600, 43.52);
insert into acao (id, ticker, quantidade, valor) values (7, 'XPBR3', 700, 87.39);
insert into acao (id, ticker, quantidade, valor) values (8, 'ENBR4', 800, 20.23);
insert into acao (id, ticker, quantidade, valor) values (9, 'LEVE3', 900, 29.62);
insert into acao (id, ticker, quantidade, valor) values (10, 'B3SA3', 100, 41.71);

insert into usuario (id, nomeUsuario, email, password, saldo) values (1, 'XPTO', 'kslingsby0@chicagotribune.com', '4dVuWbuNF', 96.38);
insert into usuario (id, nomeUsuario, email, password, saldo) values (2, 'BYAK', 'bmcgrady1@usnews.com', 'jrO7Od2fH', 57.52);
insert into usuario (id, nomeUsuario, email, password, saldo) values (3, 'TRYBE', 'bfilipczak2@auda.org.au', 'Lg09yYsHaEEa', 57.13);

insert into acao_usuario (idAcao, idUsuario, quantidade, flagCompraVenda) values (1, 2, 5, true);
insert into acao_usuario (idAcao, idUsuario, quantidade, flagCompraVenda) values (2, 2, 5, false);


