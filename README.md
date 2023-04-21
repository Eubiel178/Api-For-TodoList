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
  "key": "4", //campo nao obrigatorio
  "_id": "23728478I02", //campo nao obrigatorio
  "urgency": "#FF0000" //campo nao obrigatorio
}

// Chave key usado para quando o for iterar sobre um array, basta quando for adicionar o item no backend enviar um numero aleatorio. Obs: os numeros nao podem se repetir,

//O campo index e utilizado quando o programador deseja ordenar o array no frontend
```

--Urgency:

   <div color="#FF0000" border-radius="1em" width="1em" height="1em"></div>: Urgente
   #ffa500: Pouca urgencia
   #90ee90 : Pouca urgencia

## GET /list/user-id/:id

## PATCH /list/task-id/:id

pass the fields you want to change in the json

```json
{
  "isFinished": false
}
```

## DELETE /list/task-id/:id
