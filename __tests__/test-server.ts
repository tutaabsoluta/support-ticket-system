import { envs } from "../src/config/envs";
import { Server } from "../src/presentation/server";
import { AppRoutes } from "../src/routes";

// Montar una BD de prueba
// Crear un .env.test
// Se crea un archivo de configuracion para cargar las variables de entorno de testing
// Montar un server de test
// Hacer la migracion de Prisma

export const testServer = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
})