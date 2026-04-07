# Microservico de Duvidas - Lab Invest

API simples em Node.js + Express para cadastro, listagem e resposta de duvidas financeiras.

## Visao geral

Este projeto expoe endpoints HTTP para:
- enviar uma nova duvida
- listar duvidas cadastradas
- responder uma duvida existente

Atualmente os dados ficam em memoria (array local), sem banco de dados.

## Tecnologias

- Node.js
- Express 4

## Estrutura

- `index.js`: inicializacao do servidor e registro de rotas
- `routes/duvida-route.js`: rotas da API
- `controllers/duvida-controller.js`: camada de controle HTTP
- `services/duvida-services.js`: regras de negocio
- `repository/duvida-repository.js`: persistencia em memoria

## Requisitos

- Node.js 18+ (recomendado)
- npm

## Instalacao

```bash
npm install
```

## Como executar

```bash
npm start
```

Servidor padrao:
- `http://localhost:3000`

## Endpoints

Base URL:
- `/api/duvidas`

### 1) Enviar duvida

- Metodo: `POST`
- Rota: `/api/duvidas/enviar`

Body (JSON):

```json
{
  "usuario": "maria",
  "categoria": "investimentos",
  "pergunta": "Qual a diferenca entre CDB e Tesouro Selic?"
}
```

Resposta esperada: `201 Created`

### 2) Listar duvidas

- Metodo: `GET`
- Rota: `/api/duvidas/listar`

Resposta esperada: `200 OK`

### 3) Responder duvida

- Metodo: `POST`
- Rota: `/api/duvidas/responder/:id`

Body (JSON):

```json
{
  "resposta": "Tesouro Selic costuma ter mais liquidez diaria.",
  "idVoluntario": "vol-123"
}
```

Resposta esperada: `200 OK`

## Exemplos com cURL

Enviar duvida:

```bash
curl -X POST http://localhost:3000/api/duvidas/enviar \
  -H "Content-Type: application/json" \
  -d "{\"usuario\":\"maria\",\"categoria\":\"investimentos\",\"pergunta\":\"Como comecar a investir?\"}"
```

Listar duvidas:

```bash
curl http://localhost:3000/api/duvidas/listar
```

Responder duvida com id 1:

```bash
curl -X POST http://localhost:3000/api/duvidas/responder/1 \
  -H "Content-Type: application/json" \
  -d "{\"resposta\":\"Comece por reserva de emergencia e renda fixa.\",\"idVoluntario\":\"vol-123\"}"
```

## Observacoes

- Os dados sao perdidos ao reiniciar o servidor.
- Validacoes atuais:
  - envio exige `usuario`, `pergunta` e `categoria`
  - resposta exige `resposta` e `idVoluntario`
- Em caso de erro de validacao, a API retorna mensagem no campo `erro`.

## Possiveis melhorias

- Integrar banco de dados (MongoDB, PostgreSQL, etc.)
- Adicionar testes automatizados
- Adicionar tratamento para id inexistente em resposta de duvida
- Versionar API (`/api/v1/...`)
