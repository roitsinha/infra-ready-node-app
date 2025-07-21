# Infra-Ready Node App

This project is a backend built with Node.js and PostgreSQL. It’s designed to be easy to run locally or in containers with Docker, and it's set up with continuous integration workflows to help keep the code solid and deployable.

---

## What’s Inside?

You’ll find the main backend code inside a folder called `backend`. It’s organized into folders for configuration, controllers that handle routes, models for database stuff, routes, and tests for checking the code. Outside that, there are files for Docker and infrastructure as code.

The backend uses ES modules (`import` / `export`) throughout.

---

## How to Get Started

1. Clone the project to your computer.

2. Move into the `backend` folder.

3. Copy the example environment file to a real one — this is where you’ll set things like your database address and ports:

   ```bash
   cp .env.example .env
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the app:

   ```bash
   npm start
   ```

---

## Running Locally

To run the app locally:

- Ensure PostgreSQL is running and accessible.

- Make sure your `.env` file has the correct database connection strings.

- Create and initialize the databases before running the app or tests:

  ```bash
  createdb infra_ready_db
  createdb infra_ready_db_test
  psql -d infra_ready_db -f ./backend/utils/init.sql
  psql -d infra_ready_db_test -f ./backend/utils/init.sql
  ```

- Run the backend app inside the `backend` folder:

  ```bash
  npm start
  ```

- The backend serves a simple frontend from the `public` folder with an `index.html` that lets you view and create users via the API.

---

## Running with Docker

If you have Docker and Docker Compose installed, you can run everything in containers with:

```bash
docker-compose up --build
```

This will start both the backend app and PostgreSQL database, automatically initializing the database schema.

---

## Project Structure Explained

- `backend/config` — configuration files like DB settings.
- `backend/controllers` — route handlers and business logic.
- `backend/models` — database schemas and queries.
- `backend/routes` — API endpoint definitions.
- `backend/tests` — Jest test suites.
- `backend/public` — static frontend files (`index.html` and client JS).
- Root folder contains Docker and Terraform configs for infrastructure and deployment.

---

## Environment Variables

Set environment variables in your `.env` file. The `.env.example` provides a template.

Example:

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

Tests use Jest and run against the test database.

```bash
npm test
```

Make sure the test database exists and is initialized before running tests.

The project uses ES modules, so Jest is configured with `babel-jest` to support that.

---

## Notes on Module System and Deployment

- The backend uses ES module syntax (`import` / `export`).
- `package.json` includes `"type": "module"`.
- Static frontend is served from the `/public` folder.
- Deployment (e.g., on Railway) requires the project to remain ES module-based for compatibility.
- Jest is configured accordingly for testing ES modules.

---

## That’s it!

This setup helps you work on a solid, testable backend that can be easily deployed using Docker and infrastructure-as-code tools. To contribute or improve, follow the existing style, write tests, and keep your environment variables secure.

---
