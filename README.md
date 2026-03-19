# Modamym: Ecossistema de E-commerce e Gestão Integrada

> Projeto de Trabalho de Conclusão de Curso (TCC)  
> **Curso:** Desenvolvimento de Sistemas Integrado ao Ensino Médio  
> **Instituição:** Escola Técnica Fernando Prestes (Sorocaba-SP)  

<!-- Um ecossistema web completo desenvolvido para a **Modamym - Moda e Cosméticos**. O projeto unifica a gestão de estoque, emissão de notas fiscais (Sefaz) e múltiplos canais de venda (E-commerce próprio e Mercado Livre) em uma única plataforma centralizada. -->

Um ecossistema web completo desenvolvido para a **Modamym - Moda e Cosméticos**. O projeto unifica a gestão de estoque, emissão de notas fiscais (Sefaz) integração com o Mercado Livre para gestão de vendas e dados financeiros em uma única plataforma centralizada.

---

## Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Topologia de Integrações](#-topologia-de-integrações)
- [Pré-requisitos e Instalação](#-pré-requisitos-e-instalação)
- [Equipe de Desenvolvimento](#-equipe-de-desenvolvimento)

---

## Sobre o Projeto

A Modamym enfrentava o desafio de gerenciar o inventário de forma fragmentada entre compras de fornecedores, vendas no Mercado Livre e a necessidade de expansão para uma loja virtual própria. 

Este sistema resolve esse problema atuando em três frentes:
1. **ERP (Backoffice):** Controle de entrada de mercadorias via XML/NF-e de fornecedores e saída via vendas.
2. **Integração com Anúncios e Vendas:** Sincronização de anúncios e vendas entre o sistema e o Mercado Livre para controle de faturamento e lucro.
<!-- 3. **E-commerce Inteligente:** Loja virtual com área logada, histórico de compras, checkout rápido e vitrine de recomendações personalizadas. -->

---

## Arquitetura e Tecnologias

A arquitetura foi desenhada focando em **segurança e separação de responsabilidades**, isolando a camada de apresentação (Frontend) das regras de negócio e integrações (Backend API).

### Backend (API e Regras de Negócio)
- **Node.js**: Motor principal da aplicação.
- **Express**: Roteamento e middlewares.
- **Integrações de API**: Mercado Livre e Sefaz.

### Frontend (Apresentação)
- **EJS (Embedded JavaScript templating)**: Renderização de páginas dinâmicas.

### Banco de Dados
- **MariaDB**: Banco de dados relacional robusto para garantir a integridade das transações de vendas, usuários, produtos e notas fiscais.

---

## Funcionalidades Principais

### Gestão de Estoque e Fiscal (ERP)
- [x] Entrada de produtos automatizada via leitura de NF-e (Sefaz) dos fornecedores.
- [x] Emissão de NF-e (vendas) diretamente com o CNPJ da Modamym.
- [x] Controle de inventário com baixa automática (venda no ML dá baixa no E-commerce e vice-versa).

<!-- ### E-commerce Próprio
- [x] Vitrine de produtos sincronizada com o catálogo do Mercado Livre.
- [x] Sistema de Autenticação/Login de clientes.
- [x] Painel do Cliente (Histórico de pedidos e status de entrega).
- [x] Motor de Recomendação: Produtos customizados na vitrine baseados no histórico de compras do usuário.
- [x] Carteira de Endereços (Address Book) para checkout simplificado. -->

### Integrações (Ecossistema Mercado Livre)
- [x] **Mercado Livre API**: Sincronização de anúncios, estoque, preços e vendas.
<!-- - [x] **Mercado Pago**: Processamento seguro de pagamentos no e-commerce próprio. -->
<!-- - [x] **Mercado Envios**: Geração de envios. -->
- [x] **Automação de Logística**: Envio do PDF fiscal (NF-e Sefaz) para o Mercado Livre e retorno automatizado da **etiqueta do ponto de coleta**.

---

## Pré-requisitos e Instalação

Para rodar este projeto localmente para desenvolvimento ou avaliação, você precisará de:
- [Node.js](https://nodejs.org/) (v16 ou superior)
- [MariaDB](https://mariadb.org/)
<!-- - [Nginx](https://nginx.org/) configurado apontando para o diretório do frontend. -->

### Passos:
1. Clone o repositório:
   ```bash
   git clone [https://github.com/Kanzas-TCC/Projeto-MM-TCC.git](https://github.com/Kanzas-TCC/Projeto-MM-TCC.git)
   ```
2. Configure o banco de dados MariaDB usando o script fornecido na pasta `/database`.
3. Configure o arquivo `.env` no backend com suas chaves de API do Mercado Livre e credenciais do banco.
4. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```
5. Inicie o servidor Node:
   ```bash
   npm run dev
   ```

---

## Equipe de Desenvolvimento

Projeto idealizado, projetado e desenvolvido por:

* **Alain Claus Vieira Ferreira**
* **Brendon Antunes Leal**
* **Felipe Augusto Lopes Pereira da Silva**
* **Marco Antônio de Oliveira Pereira**
* **Samuel Trontino Batista**

---

*Projeto desenvolvido para fins acadêmicos - Etec Fernando Prestes.*
