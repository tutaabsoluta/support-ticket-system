import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export class TicketController {

    // GET
    public async getTickets(req: Request, res: Response) {

        const tickets = await prisma.ticket.findMany()

        res.json(tickets)
    };

    // GET by id
    public async getTicketById(req: Request, res: Response) {

        const id = +req.params.id;
        
        if( isNaN( id ) ) return res.status(400).json({ error: `The id format is incorrect` });

        const ticket = await prisma.ticket.findFirst({
            where: { id }
        });

        if ( !ticket ) return res.status(404).json({ error: `Ticket with id ${ id } not found!` });

        return res.json(ticket);
    };
    


    // POST
    public async createTicket(req: Request, res: Response) {
        const { author, severity, text, status } = req.body;
        try {
            const nuevoTicket = await prisma.ticket.create({
                data: {
                    author,
                    severity,
                    text,
                    status
                }
            })
            res.status(201).json(nuevoTicket)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Hubo un problema creando el ticket' });
        };
    };

    // PUT
    public async updateTicket() {

    }

    // DELETE
    public async deleteTicket() {
        
    }

};