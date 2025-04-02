# P.E.R.N Support Ticket System with Clean Architecture

# Ticket System

## Description

This project is a **Fullstack** ticket management system built using the **PERN** stack (PostgreSQL, Express, React, Node.js). The application allows efficient ticket management, utilizing a **Clean Architecture** that promotes scalability and maintainability of the code.

- **Frontend:** Developed in **React**, deployed on **Vercel**.
- **Backend:** Developed in **Node.js** with **Express**, deployed on **Render**.
- **Database:** Hosted on **NeonTech** using **PostgreSQL**.
- **Architecture:** Implemented with **Clean Architecture**.

## Folder Structure

The project follows the **Clean Architecture** pattern, organizing the code into layers:

/config # Global project configuration (environment variables, Prisma setup, etc.) /data # Data layer, where data access and interactions with the database occur /domain # Business logic, entities, and core domain functionality /infrastructure # Interfaces with external systems, like APIs and databases /presentation # The presentation layer, including controllers, routes, and UI logic

## Scripts

The following npm scripts are available to run the project:

- `test`: Runs the tests after migrating the database for the test environment.
  ```bash
  npm run prisma:migrate:test && jest
test:watch: Runs tests and watches for file changes in the test environment.

npm run prisma:migrate:test && jest --watch
test:coverage: Runs tests and generates a coverage report after migrating the database for the test environment.

npm run prisma:migrate:test && jest --coverage
dev: Runs the development server with automatic restart on code changes.

tsnd --respawn --clear src/app.ts
build: Builds the project for production.

rimraf ./dist && tsc
start: Builds the project and starts the server.

npm run build && node dist/app.js
prisma:migrate:prod: Deploys migrations to the production database.


prisma migrate deploy
prisma:migrate:test: Deploys migrations to the test database using environment variables from .env.test.


dotenv -e .env.test -- npx prisma migrate deploy

Deployment
Frontend: The frontend is deployed on Vercel. Any changes pushed to the main branch will automatically trigger a deployment.

Backend: The backend is hosted on Render, ensuring a scalable and reliable environment for the application.

Database: The PostgreSQL database is hosted on NeonTech, providing a cloud-based solution for data storage and management.

Installation
To get started locally, follow these steps:

Clone the repository:

git clone https://github.com/yourusername/ticket-system.git
cd ticket-system
Install dependencies for both frontend and backend:

# Backend
npm install

# Frontend (in a separate terminal window)
cd client
npm install
Set up the environment variables:

Copy .env.example to .env and modify the variables as needed for your local setup.

Run the development server:

# Backend
npm run dev

# Frontend (in a separate terminal window)
cd client
npm start
Your local development environment should now be up and running.

Technologies Used
PostgreSQL for the database

Express for the backend API

React for the frontend

Node.js for the server runtime

Prisma as the ORM

Jest for testing

TypeScript for static typing

Vercel for frontend deployment

Render for backend deployment

NeonTech for database hosting