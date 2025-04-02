# P.E.R.N Support Ticket System with Clean Architecture

## Description

This project is a **Fullstack** ticket management system built using the **PERN** stack (PostgreSQL, Express, React, Node.js). The application allows efficient ticket management, utilizing a **Clean Architecture** that promotes scalability and maintainability of the code.

- **Frontend:** Developed in **React** and **TailwindCSS**, deployed on **Vercel**.
- **Backend:** Developed in **Node.js** with **Express**, deployed on **Render**.
- **Database:** Hosted on **NeonTech** using **PostgreSQL**.
- **Architecture:** Implemented with **Clean Architecture**.

# Backend

## Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/tutaabsoluta/support-ticket-system.git
   cd support-ticket-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```


3. **Set up environment variables:**

   - Copy `.env.template` to `.env` and configure the database.

4. **Start Docker**
   ```bash
   docker compose up -d
   ```

5. **Database Setup:**

   - Use Prisma to create the schema of the database.

   ```bash
   npm run prisma:migrate:prod
   ```

6. **Run the project:**

   ```bash
   npm run dev
   ```

# Project Scripts

| Command                   | Action                                                                                                 |
| :------------------------- | :----------------------------------------------------------------------------------------------------- |
| `npm run test`             | Runs Prisma migrations for the test environment and then runs tests with Jest.                         |
| `npm run test:watch`       | Runs Prisma migrations for the test environment and then runs Jest tests in watch mode.                |
| `npm run test:coverage`    | Runs Prisma migrations for the test environment and then runs Jest tests with coverage.                |
| `npm run dev`              | Starts the development server with `tsnd`, respawning on changes and clearing the output in `src/app.ts`. |
| `npm run build`            | Deletes the `./dist` folder and compiles TypeScript code.                                              |
| `npm run start`            | Builds the project and then starts the server with the `dist/app.js` file.                             |
| `npm run prisma:migrate:prod` | Runs Prisma migrations for the production environment.                                               |
| `npm run prisma:migrate:test` | Runs Prisma migrations for the test environment using `.env.test`.                                      |


## Folder Structure

The project follows the **Clean Architecture** pattern, organizing the code into layers:




# Frontend 

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