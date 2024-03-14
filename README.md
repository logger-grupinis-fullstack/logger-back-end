# logger-back-end

Endpoints

To install required modules run the following command in terminal:

`npm i`

Register

Endpoint: `/api/users/register`
Method: `Post`

{
"firstname": "Jonas",
"email": "jonaitis@gmail.com",
"password": "123456789",
"passwordConfirm": "123456789"
}

Login

Endpoint: `/api/users/login`
Method: `Post`

{
"email": "jonas@gmail.com",
"password": "123456789"
}

Logout

Endpoint: `/api/users/logout`
Method: `Get` `AUTH`

Get User

Endpoint: /api/users/user
Method: `Get`
Description: Returns one or more users from the database.
