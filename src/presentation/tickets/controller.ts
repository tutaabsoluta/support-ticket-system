import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTicketDto, UpdateTicketDto } from "../../domain/dtos";


export class TicketController {

    // GET
    public async getTickets(req: Request, res: Response) {

        const tickets = await prisma.ticket.findMany()

        res.json(tickets)
    };

    // GET by id
    public async getTicketById(req: Request, res: Response) {

        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({ error: `The id format is incorrect` });

        const ticket = await prisma.ticket.findFirst({
            where: { id }
        });

        if (!ticket) return res.status(404).json({ error: `Ticket with id ${id} not found!` });

        return res.json(ticket);
    };



    // POST
    public async createTicket(req: Request, res: Response) {

        const [error, createTicketDto] = CreateTicketDto.create(req.body);

        if (error) return res.status(400).json({ error });

        const nuevoTicket = await prisma.ticket.create({
            data: createTicketDto!
        });
        res.status(201).json(nuevoTicket)

    };

    // PUT
    public async updateTicket(req: Request, res: Response) {

        const id = +req.params.id;

        const [error, updateTodoDto] = UpdateTicketDto.create({...req.body, id});
        if ( error ) return res.status(400).json({ error });
        
        const ticket = await prisma.ticket.findFirst({
          where: { id }
        });
    
        if ( !ticket ) return res.status( 404 ).json( { error: `Todo with id ${ id } not found` } );
    
        const updatedTodo = await prisma.ticket.update({
          where: { id },
          data: updateTodoDto!.values
        });
      
        res.json( updatedTodo );
    
    }

    // DELETE
    public async deleteTicket(req: Request, res: Response) {

        const id = +req.params.id;

        const ticket = await prisma.ticket.findFirst({
            where: { id }
        });

        if (!ticket) return res.status(404).json({ error: `Ticket with id ${id} not found` });

        const deletedTicket = await prisma.ticket.delete({
            where: { id }
        });

        (deletedTicket)
            ? res.json(deletedTicket)
            : res.status(404).json(`Ticket with id ${id} not found`);


    };

};