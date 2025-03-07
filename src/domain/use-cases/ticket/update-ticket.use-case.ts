import { UpdateTicketDto } from "../../dtos";
import { TicketEntity } from "../../entities/ticket.entity";
import { TicketRepository } from "../../repositories/ticlet.repository";



export interface UpdateTicketUseCase {

    execute( dto: UpdateTicketDto ): Promise<TicketEntity> 

};

export class UpdateTicket implements UpdateTicketUseCase {

    constructor(  private readonly repository: TicketRepository ) {};

    execute( dto: UpdateTicketDto ): Promise<TicketEntity> {
        return this.repository.update( dto );
    };
};