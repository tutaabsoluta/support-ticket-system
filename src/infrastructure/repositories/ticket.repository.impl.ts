import { CreateTicketDto, TicketDatasource, TicketEntity, TicketRepository, UpdateTicketDto } from "../../domain";



export class TicketRepositoryImpl implements TicketRepository {

    constructor(
        private readonly datasource: TicketDatasource
    ) 
    {}

    create(createTicketDto: CreateTicketDto): Promise<TicketEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<TicketEntity[]> {
        return this.datasource.getAll();
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