import { CreateTicketDto } from "../../dtos";
import { TicketEntity } from "../../entities/ticket.entity";
import { TicketRepository } from "../../repositories/ticlet.repository";



export interface GetTicketsUseCase {

    execute(  ): Promise<TicketEntity[]> 

};

export class GetTickets implements GetTicketsUseCase {

    constructor(  private readonly repository: TicketRepository ) {};

    execute(): Promise<TicketEntity[]> {
        return this.repository.getAll( );
    };
};