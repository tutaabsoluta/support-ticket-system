import { Router } from "express";
import { TicketController } from "./controller";


export class TicketRoutes {

    static get routes(): Router {

        // router instance
        const router = Router();

        // controller instance
        const ticketController = new TicketController

        router.get( '/', ticketController.getTickets) ;
        router.get('/:id', ticketController.getTicketById );

        router.post( '/', ticketController.createTicket );


        router.put( '/:id', ticketController.updateTicket );

        router.delete( '/:id', ticketController.deleteTicket );

        return router;
    };
};