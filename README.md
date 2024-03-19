# logger-back-end

## Endpoints

To install required modules run the following command in terminal:

`npm i`

### Register

- **Endpoint:** `/api/users/register`
- **Method:** `POST`
```js
{
    "firstname": "Jonas",
    "email": "jonaitis@gmail.com",
    "password": "123456789",
    "passwordConfirm": "123456789"
}
```

### Login

- **Endpoint:** `/api/users/login`
- **Method:** `POST`
```js
{
    "email": "jonas@gmail.com",
    "password": "123456789"
}
```

### Logout

- **Endpoint:** `/api/users/logout`
- **Method:** `GET` `AUTH`

### Get User

- **Endpoint:** `/api/users/user`
- **Method:** `GET`
- **Description:** Returns one or more users from the database.