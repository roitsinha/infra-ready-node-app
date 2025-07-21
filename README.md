# Infra-Ready Node App

This project is a backend built with Node.js and PostgreSQL. It’s designed to be easy to run locally or in containers with Docker, and it's set up with continuous integration workflows to help keep the code solid and deployable.

---

## What’s Inside?

You’ll find the main backend code inside a folder called `backend`. It’s organized into folders for configuration, controllers that handle routes, models for database stuff, and tests for checking the code. Outside that, there are files for Docker and infrastructure as code.

---

## How to Get Started

1. First, clone the project to your computer.
2. Move into the `backend` folder.
3. Copy the example environment file to a real one — this is where you’ll set things like your database address and ports:

   ```bash
   cp .env.example .env
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

5. Start the app:

   ```bash
   npm start
   ```

---

## Running Locally

If you want to run the app on your computer:

- Open a terminal and go into the `backend` folder.
- Run `cp .env.example .env` to create your environment file.
- Run `npm install` to get all the required packages.
- Then run `npm start` to launch the app.
- Make sure PostgreSQL is running locally, and your `.env` file has the correct connection strings.
- Create and initialize the databases before running the app or tests:

  ```bash
  createdb infra_ready_db
  createdb infra_ready_db_test
  psql -d infra_ready_db -f ./backend/utils/init.sql
  psql -d infra_ready_db_test -f ./backend/utils/init.sql
  ```

---

## Running with Docker

If you have Docker and Docker Compose installed, you can run everything in containers with:

```
docker-compose up --build
```

This will start both the backend app and the PostgreSQL database, automatically initializing the database schema.

---

## Project Structure Explained

- `backend/config` holds configuration files like database settings.
- `backend/controllers` contains the code that responds to API requests.
- `backend/models` is where the database schemas and queries live.
- `backend/routes` defines the different API endpoints.
- `backend/tests` has the tests for your app.
- The root folder has Docker files and Terraform configs for infrastructure.

---

## Environment Variables

You’ll need to set some environment variables in your `.env` file. The example file `.env.example` shows what’s needed, such as the database connection string and the port number.

Example variables:

```env
PORT=3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/infra_ready_db
TEST_DATABASE_URL=postgresql://postgres:password@localhost:5432/infra_ready_db_test
PGUSER=postgres
PGPASSWORD=password
PGHOST=localhost
PGPORT=5432
PGDATABASE=infra_ready_db
```

- `DATABASE_URL` is used for development.
- `TEST_DATABASE_URL` is used when running tests (`NODE_ENV=test`).

---

## Running Tests

You can run tests using Jest. From the backend folder, run:

```
npm test
```

Tests will use the test database and expect it to be created and initialized.

---

## That’s it!

This setup helps you work on a solid, testable backend that can be easily deployed using Docker and infrastructure-as-code tools. If you want to contribute or improve it, just follow the code style and add tests!

---
