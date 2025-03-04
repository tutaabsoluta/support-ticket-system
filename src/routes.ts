import { Router } from "express";
import { TicketRoutes } from './presentation/tickets/routes'


export class AppRoutes {

    static get routes(): Router {
        
        const router = Router();

        router.use('/', TicketRoutes.routes )

        return router;
    };
};