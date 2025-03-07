import { TicketEntity } from "../../entities/ticket.entity";
import { TicketRepository } from "../../repositories/ticlet.repository";



export interface GetTicketUseCase {

    execute( id: number ): Promise<TicketEntity> 

};

export class GetTicket implements GetTicketUseCase {

    constructor(  private readonly repository: TicketRepository ) {};

    execute(id: number ): Promise<TicketEntity> {
        return this.repository.getById( id );
    };
};