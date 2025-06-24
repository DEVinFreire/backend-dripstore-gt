# 🛍️ Drip Store Backend

This repository contains the backend for the **Drip Store** application, built with Node.js, Express, and Sequelize. It uses JWT for authentication, Jest for testing, and MySQL as the database.

Este repositório contém o backend da aplicação **Drip Store**, desenvolvido com Node.js, Express e Sequelize. Utiliza JWT para autenticação, Jest para testes e MySQL como banco de dados.

---

## 📦 Technologies / Tecnologias utilizadas

- **Node.js** – server-side JavaScript runtime / ambiente de execução JS no servidor
- **Express.js** – web API framework / framework para criação de APIs
- **Dotenv** – environment variable management / gerenciamento de variáveis
- **Nodemon** – auto-reload during development / reinício automático em dev
- **MySQL** – relational database / banco de dados relacional
- **Sequelize** – ORM for DB operations / ORM para banco de dados
- **JWT** – authentication and access control / autenticação e controle de acesso
- **Jest** – unit testing / testes automatizados

---

## 📁 Project Structure / Estrutura do Projeto

```
project-root/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
├── tests/
├── .env
├── .gitignore
├── package.json
```

---

## 🔐 Authentication / Autenticação

- `POST /v1/user/token` – JWT token generation / geração do token
- Use `Authorization: Bearer <token>` header
- Middleware protects POST, PUT, DELETE routes

Middleware `auth.js` protege as rotas que precisam de autenticação.

---

## 🧪 Tests / Testes

Run tests with / Execute os testes com:

```bash
npm run test
```

Test files:
- `tests/user.test.js`
- `tests/category.test.js`
- `tests/product.test.js`

---

## ✅ Main Endpoints / Endpoints principais

### 🧑‍💼 Users / Usuários
- `GET /v1/user/:id`
- `POST /v1/user`
- `PUT /v1/user/:id`
- `DELETE /v1/user/:id`

### 🔐 Auth / Autenticação
- `POST /v1/user/token`

### 📂 Categories / Categorias
- `GET /v1/category/search`
- `GET /v1/category/:id`
- `POST /v1/category`
- `PUT /v1/category/:id`
- `DELETE /v1/category/:id`

### 📦 Products / Produtos
- `GET /v1/product/search`
- `GET /v1/product/:id`
- `POST /v1/product`
- `PUT /v1/product/:id`
- `DELETE /v1/product/:id`

---

## 🛠️ How to run / Como rodar

```bash
# Install dependencies / Instale as dependências
npm install

# Configure the .env file / Configure o arquivo .env
# Example / Exemplo:
DB_HOST=localhost
DB_USER=root
DB_PASS=senha
DB_NAME=dripstore

# Run server / Rode o servidor
npm run dev
```

---

## 📃 License / Licença

This project is licensed under the MIT License.  
Este projeto está sob a licença MIT.
