import { Router } from "express";
import { TicketController } from "./controller";


export class TicketRoutes {

    static get routes(): Router {

        // router instance
        const router = Router();

        // controller instance
        const ticketController = new TicketController

        router.get('/api/tickets', ticketController.getTickets)

        return router;
    };
};