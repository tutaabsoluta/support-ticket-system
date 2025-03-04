import { Router } from "express";
import { TicketRoutes } from './presentation/tickets/routes'


export class AppRoutes {

    static get routes(): Router {
        
        const router = Router();

        router.use('/api/tickets', TicketRoutes.routes )

        return router;
    };
};