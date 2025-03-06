import { CreateTicketDto, TicketDatasource, TicketEntity, TicketRepository, UpdateTicketDto } from "../../domain";



export class TicketRepositoryImpl implements TicketRepository {

    constructor(
        private readonly datasource: TicketDatasource
    ) 
    {}

    create( createTicketDto: CreateTicketDto ): Promise<TicketEntity> {
        return this.datasource.create( createTicketDto );
    };

    getAll(): Promise<TicketEntity[]> {
        return this.datasource.getAll();
    };

    getById( id: number ): Promise<TicketEntity> {
        return this.datasource.getById( id );
    };

    update( updateTicketDto: UpdateTicketDto ): Promise<TicketEntity> {
        return this.datasource.update( updateTicketDto );
    };

    delete( id: number ): Promise<TicketEntity> {
        return this.datasource.delete( id );
    };
    
};