# Script SQL Completo - Sistema de Gerenciamento de Estoque

```sql
create database if not exists kanzas_bd;
use kanzas_bd;

-- ==========================================
-- tabela: nota_fiscal_entrada
-- ==========================================
create table nota_fiscal_entrada (
    id_nfe int auto_increment primary key,
    codigo_nfe varchar(44) not null unique,
    fornecedor varchar(255) not null,
    descricao text,
    data_emissao date not null,

    index idx_codigo_nfe (codigo_nfe)
);

-- ==========================================
-- tabela: item_nota_fiscal_entrada
-- ==========================================
create table item_nota_fiscal_entrada (
    id_infe int auto_increment primary key,
    id_item int not null unique,
    id_nfe int not null,
    nome varchar(255) not null,
    quantidade int not null,
    valor decimal(10,2) not null,
    ean varchar(13),
    ncm varchar(8),
    cest varchar(7),

    index idx_id_item (id_item),
    index idx_ean (ean),

    constraint fk_item_nfe
        foreign key (id_nfe)
        references nota_fiscal_entrada(id_nfe)
        on delete cascade
        on update cascade
);

-- ==========================================
-- tabela: familia
-- ==========================================
create table familia (
    id_familia int auto_increment primary key,
    id_item int not null,
    nome_da_familia varchar(255) not null,

    constraint fk_familia_item
        foreign key (id_item)
        references item_nota_fiscal_entrada(id_item)
        on delete cascade
        on update cascade
);

-- ==========================================
-- tabela: anuncio
-- ==========================================
create table anuncio (
    id_anuncio int auto_increment primary key,
    id_familia int not null unique,
    valor_venda decimal(10,2) not null,
    tipo_anuncio enum('classico', 'premium') not null,

    constraint fk_anuncio_familia
        foreign key (id_familia)
        references familia(id_familia)
        on delete cascade
        on update cascade
);

-- ==========================================
-- tabela: venda
-- ==========================================
create table venda (
    id_venda int auto_increment primary key,
    id_anuncio int not null,
    cod_venda varchar(50) not null,
    estado varchar(2) not null,
    cidade varchar(100) not null,
    data datetime not null,

    constraint fk_venda_anuncio
        foreign key (id_anuncio)
        references anuncio(id_anuncio)
        on delete cascade
        on update cascade
);

-- ==========================================
-- tabela: usuario
-- ==========================================
create table usuario (
    id_usuario int auto_increment primary key,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    senha_hash varchar(255) not null,
    nivel enum('admin', 'comum') not null,

    index idx_email (email)
);

-- ==========================================
-- seed de dados fictícios
-- ==========================================

insert into nota_fiscal_entrada (
    codigo_nfe,
    fornecedor,
    descricao,
    data_emissao
) values
('12345678901234567890123456789012345678901234', 'fornecedor alpha ltda', 'compra de eletrônicos', '2026-03-01'),
('98765432109876543210987654321098765432109876', 'fornecedor beta me', 'compra de acessórios', '2026-03-05');

insert into item_nota_fiscal_entrada (
    id_item,
    id_nfe,
    nome,
    quantidade,
    valor,
    ean,
    ncm,
    cest
) values
(1001, 1, 'mouse gamer rgb', 10, 89.90, '7891234567890', '84716053', '1234567'),
(1002, 1, 'teclado mecânico', 5, 249.90, '7891234567891', '84716052', '1234568'),
(1003, 2, 'fone bluetooth', 8, 159.90, '7891234567892', '85183000', '1234569');

insert into familia (
    id_item,
    nome_da_familia
) values
(1001, 'linha mouse gamer'),
(1002, 'linha teclado mecânico'),
(1003, 'linha fones bluetooth');

insert into anuncio (
    id_familia,
    valor_venda,
    tipo_anuncio
) values
(1, 129.90, 'premium'),
(2, 349.90, 'classico'),
(3, 219.90, 'premium');

insert into venda (
    id_anuncio,
    cod_venda,
    estado,
    cidade,
    data
) values
(1, 'mlb100001', 'sp', 'sorocaba', '2026-03-10 14:30:00'),
(2, 'mlb100002', 'rj', 'rio de janeiro', '2026-03-12 09:15:00'),
(3, 'mlb100003', 'mg', 'belo horizonte', '2026-03-15 18:45:00');

insert into usuario (
    nome,
    email,
    senha_hash,
    nivel
) values
('administrador', 'admin@kanzas.com', '$2y$10$hashbcryptadmin', 'admin'),
('joão silva', 'joao@kanzas.com', '$2y$10$hashbcryptjoao', 'comum');
```
