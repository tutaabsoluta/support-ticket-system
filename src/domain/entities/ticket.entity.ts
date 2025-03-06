



export class TicketEntity {
 
    constructor(
        public id: number,
        public author: string,
        public text: string,
        public severity: 'LOW' | 'MEDIUM' | 'HIGH',
        public status?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED',
        public createdAt?: Date | null,
    ) {}

    get isClosed(): boolean {
        return this.status === 'CLOSED'
    };

    public static fromObject( object: {[key: string]: any} ): TicketEntity {

        const { id, author, text, severity, createdAt } = object;

        if ( !id ) throw 'The id is required';
        if ( !author ) throw 'The author is required';
        if ( !text ) throw 'The text is required';
        if ( !severity ) throw 'The severity is required';

        let newCreatedAt;

        if ( newCreatedAt ) {
            newCreatedAt = new Date( createdAt );

            if ( isNaN( newCreatedAt.getTime() ) ) {
                throw 'CreatedAt is not a valid date'
            };
        };

        return new TicketEntity(
            id,
            author,
            text,
            severity,
            createdAt,
        );
    };
};