
## Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/tutaabsoluta/fs-tickets-pern.git
   cd server
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

## Project Scripts

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

    support-ticket-system/
    ├── __tests__/
    ├── src/
    │   ├── config/
    │   ├── data/
    │   ├── domain/
    │   │   │── datasources
    │   │   │── dtos
    │   │   │── entities
    │   │   │── errors
    │   │   │── repositories
    │   │   └── use-cases
    │   ├── infrastructure/
    │   │   │── datasources
    │   │   └── repositories
    │   ├── presentation/
    │   │   │── tickets
    │   │   └── server.ts
    │   └── app.ts
    |   └── routes.ts
    ├── .env
    ├── docker-compose.yml
    ├── package.json
    └── tsconfig.json


