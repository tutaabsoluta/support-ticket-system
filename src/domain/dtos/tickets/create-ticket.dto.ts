


export class CreateTicketDto {
    
    private constructor(
        public readonly author: string,
        public readonly text: string,
        public readonly severity: 'LOW' | 'MEDIUM' | 'HIGH',
    ) 
    { }

    static create( props: { [key: string]: any } ): [ string?, CreateTicketDto? ] {

        const { author, text, severity } = props;

        if ( !author ) return [ 'The author property is required', undefined ];

        if ( !text ) return [ 'The text property is required', undefined ];

        if ( !severity ) return [ 'The severity property is required', undefined ];

        // const validSeverities = ['LOW', 'MEDIUM', 'HIGH'];
        // if (!validSeverities.includes(severity)) {
        //     return ['The severity property must be one of: LOW, MEDIUM, HIGH', undefined];
        // }
        
        return [ undefined, new CreateTicketDto( author, text, severity ) ];
    };
};



