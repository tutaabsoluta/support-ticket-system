


export class CreateTicketDto {
    
    private constructor(
        public readonly author: string,
        public readonly text: string,
        public readonly severity: 'LOW' | 'MEDIUM' | 'HIGH',
    ) 
    { }

    static create( props: { [key: string]: any } ): [ string?, CreateTicketDto? ] {

        const { author, text, severity } = props;

        if ( !author || author.length === 0 ) return [ 'The author property is required', undefined ];

        if ( !text || text.length === 0 ) return [ 'The text property is required', undefined ];

        if ( !severity || severity.length === 0 ) return [ 'The severity property is required', undefined ];

        return [ undefined, new CreateTicketDto( author, text, severity ) ];
    };
};



