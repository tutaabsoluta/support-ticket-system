import { prisma } from "../../data/postgres";
import { CreateTicketDto, TicketDatasource, TicketEntity, UpdateTicketDto } from "../../domain";



export class TicketDatasourceImpl implements TicketDatasource {

    create(createTicketDto: CreateTicketDto): Promise<TicketEntity> {
        throw new Error("Method not implemented.");
    }

    async getAll(): Promise<TicketEntity[]> {

        const tickets = await prisma.ticket.findMany()

        return tickets.map( ticket => TicketEntity.fromObject(ticket) )
        
    }

    getById(id: number): Promise<TicketEntity> {
        throw new Error("Method not implemented.");
    }

    update(updateTicketDto: UpdateTicketDto): Promise<TicketEntity> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<TicketEntity> {
        throw new Error("Method not implemented.");
    }

}