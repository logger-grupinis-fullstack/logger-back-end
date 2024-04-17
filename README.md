# logger-back-end

To install required modules run the following command in terminal:

`npm i`

## Users Endpoints

### User Register

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

### User Login

- **Endpoint:** `/api/users/login`
- **Method:** `POST`

```js
{
    "email": "jonas@gmail.com",
    "password": "123456789"
}
```

### User Logout

- **Endpoint:** `/api/users/logout`
- **Method:** `POST`

### Get User

- **Endpoint:** `/api/users/user`
- **Method:** `GET`
- **Description:** Returns one or more users from the database.

## Work types Endpoints

### Create Work Type

- **Endpoint:** `/api/workTypes`
- **Method:** `POST`

```js
{
    "name": "Test work type",
    "description": "Test work type"
}
```

### Get ALL work types

- **Endpoint:** `/api/workTypes`
- **Method:** `GET`

### Get ALL work types of current user

- **Endpoint:** `/api/workTypes/user`
- **Method:** `GET`

### Update work type by id

- **Endpoint:** `/api/workTypes/:id`
- **Method:** `PUT`

```js
{
    "name": "Updated Test work type",
    "description": "Updated Test work type"
}
```

### Delete work type by id

- **Endpoint:** `/api/workTypes/:id`
- **Method:** `DELETE`

## Projects Endpoints

### Create project

- **Endpoint:** `/api/projects`
- **Method:** `POST`

```js
{
    "name": "New project",
    "description": "New project test",
    "projectManager": "Jonas",
    "workHours": 1000
}
```

### Get ALL projects

- **Endpoint:** `/api/projects`
- **Method:** `GET`

### Get ALL projects of current user

- **Endpoint:** `/api/projects/user`
- **Method:** `GET`

### Update project by id

- **Endpoint:** `/api/projects/:id`
- **Method:** `PUT`

```js
{
    "name": "Updated New project",
    "description": "Updated New project test",
    "projectManager": "Jonas",
    "workHours": 2000
}
```

### Delete project by id

- **Endpoint:** `/api/projects/:id`
- **Method:** `DELETE`
