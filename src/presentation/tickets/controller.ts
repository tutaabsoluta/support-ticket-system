import { Request, Response } from "express";


export class TicketController {
    public getTickets( req: Request, res: Response ) {
        res.send('Hola desde el controllador en metodo Get')
    };
};