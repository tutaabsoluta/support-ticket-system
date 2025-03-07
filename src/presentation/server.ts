import express, { Router } from 'express';
import compression from 'compression';

interface Options {
    port: number;
    routes: Router;
};

export class Server {
    

    // express instance
    private app = express();

    // Server props
    private readonly port: number;
    private readonly routes: Router;


    constructor( options: Options ) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes
    };

    // start method
    async start() {

        // Middlewares
        this.app.use( express.json() );
        this.app.use( express.urlencoded( { extended: true }) );
        this.app.use( compression() );
        
        // Routes
        this.app.use( this.routes );
        

        this.app.listen(this.port, () => {
            console.log(`Server running on port ${ this.port }`)
        });
    };
};