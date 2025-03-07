import { Request, Response } from "express";
import { CreateTicketDto, UpdateTicketDto } from "../../domain/dtos";
import { CreateTicket, DeleteTicket, GetTicket, GetTickets, TicketRepository, UpdateTicket } from "../../domain";


export class TicketController {

    constructor(
        private readonly ticketRepository: TicketRepository
    ) { }


    // Get
    public getTickets = (req: Request, res: Response) =>  {

        new GetTickets( this.ticketRepository )
            .execute()
                .then( tickets => { res.json( tickets )})
                .catch( error => res.status(400).json({ error }) )
    };

    // Get by id
    public  getTicketById = (req: Request, res: Response) => {

        const id = +req.params.id

        new GetTicket( this.ticketRepository )
            .execute(id)
                .then( ticket => res.json( ticket ) )
                .catch( error => res.status(404).json({ error }) )

    };


    // Create
    public createTicket = (req: Request, res: Response) => {

        const [error, createTicketDto] = CreateTicketDto.create(req.body);

        if (error) return res.status(400).json({ error });

        new CreateTicket( this.ticketRepository )
            .execute( createTicketDto! )
                .then( ticket => res.status(201).json( ticket ) )
                .catch( error => res.status(400).json({ error }))
    };

    // Update
    public updateTicket = (req: Request, res: Response) => {

        const id = +req.params.id;

        const [error, updateTicketDto] = UpdateTicketDto.create({...req.body, id});
        if ( error ) return res.status(400).json({ error });

        new UpdateTicket( this.ticketRepository )
            .execute( updateTicketDto! )
                .then( ticket => res.json( ticket ) )
                .catch( error => res.status(404).json({ error }) )
    
    }

    // Delete
    // TODO: id not found si ya se elimino
    public  deleteTicket = (req: Request, res: Response) => {

        const id = +req.params.id;

        new DeleteTicket( this.ticketRepository )
            .execute(id)
                .then( ticket => res.json( ticket ) )
                .catch( error => res.status(404).json({ error }) )

    };

};