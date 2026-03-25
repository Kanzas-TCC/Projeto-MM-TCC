CREATE DATABASE IF NOT EXISTS kanzas_bd;
USE kanzas_bd;

-- Tabela: notas_fiscais_entrada

CREATE TABLE nota_fiscal_entrada (
    id_nota_fiscal_entrada INT AUTO_INCREMENT PRIMARY KEY,
    codigo_nota_fiscal_entrada VARCHAR(50),
    fornecedor VARCHAR(150),
    descricao TEXT,
    data_emissao DATE
);

-- Tabela: familias

CREATE TABLE familia (
    id_familia INT AUTO_INCREMENT PRIMARY KEY,
    nome_da_familia VARCHAR(100)
);

-- Tabela: itens_nota_fiscal_entrada

CREATE TABLE item_nota_fiscal_entrada (
    id_item INT AUTO_INCREMENT,
    id_item_nota_fiscal_entrada INT,
    nome VARCHAR(150),
    quantidade INT,
    valor DECIMAL(10,2),
    ean VARCHAR(20),
    ncm VARCHAR(20),
    cest VARCHAR(20),
    
    PRIMARY KEY (id_item, id_item_nota_fiscal_entrada),
    
    CONSTRAINT fk_item_nota_fiscal_entrada
        FOREIGN KEY (id_item_nota_fiscal_entrada)
        REFERENCES nota_fiscal_entrada(id_nota_fiscal_entrada)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_item_familia
        FOREIGN KEY (id_item)
        REFERENCES familias(id_familia)
        ON DELETE CASCADE
);


-- Tabela: anuncios

CREATE TABLE anuncios (
    id_anuncio INT AUTO_INCREMENT PRIMARY KEY,
    id_familia INT,
    valor_venda DECIMAL(10,2),
    tipo_anuncio VARCHAR(50),
    
    CONSTRAINT fk_anuncio_familia
        FOREIGN KEY (id_familia)
        REFERENCES familias(id_familia)
        ON DELETE SET NULL
);


-- Tabela: vendas

CREATE TABLE vendas (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    id_anuncio INT,
    cod_venda VARCHAR(50),
    estado VARCHAR(50),
    cidade VARCHAR(100),
    data DATE,
    
    CONSTRAINT fk_venda_anuncio
        FOREIGN KEY (id_anuncio)
        REFERENCES anuncios(id_anuncio)
        ON DELETE CASCADE
);