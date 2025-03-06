import { CreateTicketDto, UpdateTicketDto } from "../dtos";
import { TicketEntity } from "../entities/ticket.entity";



export abstract class TicketRepository {

        abstract create( createTicketDto: CreateTicketDto ): Promise<TicketEntity>;
    
        abstract getAll(): Promise<TicketEntity[]>;
    
        abstract getById( id: number ): Promise<TicketEntity>;
    
        abstract update( updateTicketDto: UpdateTicketDto ): Promise<TicketEntity>;
    
        abstract delete( id: number ): Promise<TicketEntity>;
    
};