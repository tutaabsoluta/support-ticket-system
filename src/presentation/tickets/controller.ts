import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTicketDto } from "../../domain/dtos";


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

        if (isNaN(id)) return res.status(400).json({ error: 'Invalid id argument' });

        const ticket = prisma.ticket.findFirst({
            where: { id }
        });

        if (!ticket) return res.status(404).json({ error: `Ticket with id ${id} not found` });

        const { author, text, severity, createdAt } = req.body;

        const updatedTicket = await prisma.ticket.update({
            where: { id },
            data: {
                author,
                text,
                severity,
                createdAt: (createdAt) ? new Date(createdAt) : undefined
            }
        });

        res.json(updatedTicket)
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