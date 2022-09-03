# TODO LIST CYPRESS

This project is for academic purposes and aims to use Cypress functionalities for E2E testing.

## Installation

In the project directory, you can run:

### `npm install`

then, you must set the environment variables:

### `cp .env.example .env`

| ENV                   | EXAMPLE          |
|-----------------------|------------------|
| NODE_ENV | development      |
| DB_CONNECTION | mysql            |
| DB_HOST | 127.0.0.1        |
| DB_PORT | 3306             |
| DB_DATABASE | todolist-cypress |
| DB_USERNAME | my-username      |
| DB_PASSWORD | my-password      |

Then, if you haven't created your database you can do it with the following command:

### `npx sequelize-cli db:create`

Then, run migrations:

### `npx sequelize-cli db:migrate`

finally, you can compile the app:

### `npm start`
