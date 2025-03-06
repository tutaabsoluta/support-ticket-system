

export class UpdateTicketDto {
    
    private constructor(
        public readonly id: number,
        public readonly author?: string,
        public readonly text?: string,
        public readonly severity?: 'LOW' | 'MEDIUM' | 'HIGH',
        public readonly status?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED',
        public readonly createdAt?: Date,
    ) 
    { }

    // Update only the desired fields
    get values() {
      const returnObj: {[ key: string ]: any} = {};

      if ( this.author ) returnObj.author = this.author;
      if ( this.text ) returnObj.text = this.text;
      if ( this.severity ) returnObj.severity = this.severity;
      if ( this.status ) returnObj.status = this.status;
      if ( this.createdAt ) returnObj.createdAt = this.createdAt;

      return returnObj;

    };

    static create( props: { [key: string]: any } ): [ string?, UpdateTicketDto? ] {

        const { id, author, text, severity, status, createdAt } = props;
        
        let newCreatedAt = createdAt;

        if ( !id || isNaN(id) ) return ['The id must be a valid number'];

        if ( createdAt ) {
          newCreatedAt = new Date( createdAt );

          if ( newCreatedAt.toString() === 'Invalid Date' ) {
            return [ 'Created at must be a valid date', undefined ]
          };
        };


        
        return [ undefined, new UpdateTicketDto( id, author, text, severity, status, newCreatedAt ) ];
    };
};