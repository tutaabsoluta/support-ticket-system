import { Request, Response } from "express";
import { prisma } from "../../data/postgres";


export class TicketController {
    
    public async getTickets(req: Request, res: Response) {

        const tickets = await prisma.ticket.findMany()

        res.json(tickets)
    };

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
            console.log('Datos del ticket:', { author, severity, text, status });

            res.status(201).json(nuevoTicket)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Hubo un problema creando el ticket' });
        }
    }
};