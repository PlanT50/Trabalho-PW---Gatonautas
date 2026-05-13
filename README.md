# Gatonautas

Site temático de exploração espacial felina, com API REST integrada ao PostgreSQL.

---

## Pré-requisitos

- [Java 17 JDK](https://adoptium.net/) (ou superior)
- [PostgreSQL 15+](https://www.postgresql.org/download/)
- Navegador moderno (Chrome, Firefox, Edge)

---

## 1. Configurar o banco de dados

Abra o pgAdmin ou o terminal do PostgreSQL e crie o banco:

```sql
CREATE DATABASE gatonautas_db;
```

> O Spring Boot cria as tabelas automaticamente na primeira execução. Não precisa rodar nenhum SQL de criação de tabela.

---

## 2. Configurar a API

Dentro de `api/Banco_De_Dados_api/src/main/resources/`, copie o arquivo de exemplo:

```
application-example.properties  →  application.properties
```

Abra o `application.properties` e preencha com os seus dados do PostgreSQL:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/gatonautas_db
spring.datasource.username=postgres
spring.datasource.password=SUA_SENHA_DO_POSTGRES
```

---

## 3. Rodar a API

Navegue até a pasta da API:

```
cd api/Banco_De_Dados_api
```

Execute com o Maven Wrapper incluído no projeto:

**Windows:**
```cmd
mvnw.cmd spring-boot:run
```

**Linux / Mac:**
```bash
./mvnw spring-boot:run
```

Aguarde a mensagem `Started GatonautasApiApplication`. A API estará disponível em `http://localhost:8080`.

---

## 4. Abrir o site

Abra qualquer arquivo `.html` na raiz do projeto no navegador. Recomendado usar a extensão **Live Server** do VS Code para evitar problemas de CORS ao abrir arquivos localmente.

A página de Mensagens (`Mensagens.html`) se comunica com a API em `http://localhost:8080/mensagens`.

---

## Estrutura do projeto

```
/
├── api/
│   └── Banco_De_Dados_api/      # API Spring Boot (Java)
│       ├── src/
│       └── pom.xml
├── assets/
│   ├── css/
│   ├── imgs/
│   └── js/
├── Mensagens.html
├── PaginaInicial.html
└── ...
```
