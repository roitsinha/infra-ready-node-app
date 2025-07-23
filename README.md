# Infra-Ready Node App

This project is a backend built with Node.js and PostgreSQL. It’s designed to be simple to set up and run locally or inside Docker containers. Plus, it’s structured for continuous integration and smooth deployment, so you can focus on building features without headaches.

---

## What’s Inside?

Inside the `backend` folder, you’ll find everything organized neatly — configuration files, route handlers (controllers), database models, API routes, and tests. The project uses ES modules (`import` / `export`) throughout, keeping it modern and clean.

There’s also infrastructure code for Docker and deployment.

---

## Getting Started

1. Clone this repo to your computer.

2. Navigate into the `backend` folder.

3. Copy the example environment file to `.env` and fill in your settings:

   ```bash
   cp .env.example .env
   ```

4. Install all dependencies:

   ```bash
   npm install
   ```

5. Start the app:

   ```bash
   npm start
   ```

---

## Running Locally

To run the app on your machine:

- Make sure PostgreSQL is installed and running.

- Update your `.env` file with the correct database connection info.

- Create and initialize your databases:

  ```bash
  createdb infra_ready_db
  createdb infra_ready_db_test
  psql -d infra_ready_db -f ./backend/utils/init.sql
  psql -d infra_ready_db_test -f ./backend/utils/init.sql
  ```

- Run the backend:

  ```bash
  npm start
  ```

- Your backend will serve a simple frontend at `http://localhost:3000` where you can explore the API.

---

## Running with Docker & Deployment on Render

Want to run everything inside Docker containers? No problem.

- Build and start all services (backend, database, and nginx) with:

  ```bash
  docker-compose up --build
  ```

- This spins up your full stack locally with HTTPS enabled via Nginx.

- For production, this project is ready to be deployed on **Render** (or similar platforms) using Docker images.

- Just connect your Git repo to Render, set up your environment variables in Render’s dashboard, and it will automatically build and deploy your app with HTTPS and database integration.

---

## Project Structure

- `backend/config` — config files like database connection settings

- `backend/controllers` — functions that handle API logic

- `backend/models` — database queries and schemas

- `backend/routes` — API route definitions

- `backend/tests` — Jest test suites

- `backend/public` — static frontend files (HTML, JS)

- Root folder — Docker and Terraform files for infrastructure and deployment

---

## Environment Variables

Use the `.env` file to set your environment-specific settings. See `.env.example` as a template.

Example variables include:

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

---

## Running Tests

Tests use Jest and run against the test database.

```bash
npm test
```

Make sure your test database exists and is initialized before running tests.

---

## Notes on Tech & Deployment

- Uses ES modules (`import`/`export` syntax)

- Includes a simple static frontend served from the `/public` folder

- Ready for deployment on modern platforms like Render with Docker support

- Security best practices included (Helmet, rate limiting, HTTPS via Nginx)

---

## Summary

This project sets you up with a clean, tested, and production-ready Node.js backend powered by PostgreSQL, with Docker and infrastructure support for quick deployment. Whether you’re developing locally or deploying on Render, it’s made to be smooth and professional.

---
