import { TicketEntity } from "../../entities/ticket.entity";
import { TicketRepository } from "../../repositories/ticlet.repository";



export interface DeleteTicketUseCase {

    execute( id: number ): Promise<TicketEntity> 

};

export class DeleteTicket implements DeleteTicketUseCase {

    constructor(  private readonly repository: TicketRepository ) {};

    execute(id: number ): Promise<TicketEntity> {
        return this.repository.delete( id );
    };
};