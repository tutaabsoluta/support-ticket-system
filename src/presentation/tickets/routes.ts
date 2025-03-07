import { Router } from "express";
import { TicketController } from "./controller";
import { TicketDatasourceImpl } from "../../infrastructure/datasources/ticket.datasource.impl";
import { TicketRepositoryImpl } from "../../infrastructure/repositories/ticket.repository.impl";


export class TicketRoutes {

    static get routes(): Router {

        // router instance
        const router = Router();



        const datasource = new TicketDatasourceImpl();
        const ticketRepository = new TicketRepositoryImpl( datasource );
        const ticketController = new TicketController(ticketRepository);

        router.get( '/', ticketController.getTickets) ;
        router.get('/:id', ticketController.getTicketById );

        router.post( '/', ticketController.createTicket );


        router.put( '/:id', ticketController.updateTicket );

        router.delete( '/:id', ticketController.deleteTicket );

        return router;
    };
};