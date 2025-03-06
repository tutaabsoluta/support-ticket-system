import { prisma } from "../../data/postgres";
import { CreateTicketDto, TicketDatasource, TicketEntity, UpdateTicketDto } from "../../domain";



export class TicketDatasourceImpl implements TicketDatasource {

    // Create
    async create(createTicketDto: CreateTicketDto): Promise<TicketEntity> {

        const newTicket = await prisma.ticket.create({
            data: createTicketDto!
        });

        return TicketEntity.fromObject( newTicket );
    };

    // Get
    async getAll(): Promise<TicketEntity[]> {

        const tickets = await prisma.ticket.findMany()

        return tickets.map(ticket => TicketEntity.fromObject(ticket));

    };

    // Get by id
    async getById( id: number ): Promise<TicketEntity> {
        const ticket = await prisma.ticket.findFirst({
            where: { id }
        });

        if (!ticket) throw `Ticket with id ${id} not found`;

        return TicketEntity.fromObject(ticket);
    };

    // Update
    async update( updateTicketDto: UpdateTicketDto ): Promise<TicketEntity> {

        const ticket = await this.getById(updateTicketDto.id);
        if (!ticket) throw `Ticket with id ${updateTicketDto.id} not found`;

        const updatedTicket = await prisma.ticket.update({
            where: { id: updateTicketDto.id },
            data: updateTicketDto!.values
        });
        
        return TicketEntity.fromObject( updatedTicket );
    };

    // Delete
    async delete( id: number ): Promise<TicketEntity> {

        const ticket = await this.getById( id );
        if (!ticket) throw `Ticket with id ${ id } not found`;

        const deletedTicket = await prisma.ticket.delete({
            where: { id }
        });

        return TicketEntity.fromObject( deletedTicket );
    };

};