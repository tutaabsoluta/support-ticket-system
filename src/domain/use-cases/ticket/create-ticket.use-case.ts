import { CreateTicketDto } from "../../dtos";
import { TicketEntity } from "../../entities/ticket.entity";
import { TicketRepository } from "../../repositories/ticlet.repository";



export interface CreateTicketUseCase {

    execute( dto: CreateTicketDto ): Promise<TicketEntity> 

};

export class CreateTicket implements CreateTicketUseCase {

    constructor(  private readonly repository: TicketRepository ) {};

    execute(dto: CreateTicketDto): Promise<TicketEntity> {
        return this.repository.create( dto );
    };
};