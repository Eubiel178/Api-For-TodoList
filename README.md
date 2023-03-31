# README

## Base URL

```
https://api-for-todo-list.vercel.app/
```

# Endpoints

## POST /authenticate

LOGIN

body

```json
{
  "email": "example@gmail.com",
  "password": "123456"
}
```

## POST /users

CREATE ACCOUNT

body

Password must be at least 6 digits

```json
{
  "name": "Example",
  "email": "example@gmail.com",
  "password": "123456",
  "password_confirmation": "123456"
}
```

## PATCH /users/:id

EDIT ACCOUNT DATA

body

Pass the fields you want to change in the json

```json
{
  "name": "Gab"
}
```

## DELETE /users/:id

DELETE ACCOUNT

# Task

## POST /list

```json
{
  "description": "Test",
  "isFinished": false,
  "userID": "test",
  "index": "2", //campo nao obrigatorio
  "key":"", //campo nao obrigatorio
  "_id":"" //campo nao obrigatorio
}

chave key usado para quando o for iterar sobre um array, basta quando for adicionar o item no backend enviar um numero aleatorio e diferente,
obs: os campos chave, index e _id so e enviado pelo front-end caso o programador deseje iterar sem ter que fazer um get toda vez que remover ou editar uma task
```

## GET /list/user-id/:id

## PATCH /list/task-id/:id

pass the fields you want to change in the json

```json
{
  "isFinished": false
}
```

## DELETE /list/task-id/:id
