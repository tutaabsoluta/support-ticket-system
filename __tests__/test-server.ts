import { envs } from "../src/config/envs";
import { Server } from "../src/presentation/server";
import { AppRoutes } from "../src/routes";




export const testServer = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
})