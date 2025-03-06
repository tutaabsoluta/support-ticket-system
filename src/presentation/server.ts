import express, { Router } from 'express';
import { ConsoleLogger } from '../infrastructure/logging/console-logger'

interface Options {
    port: number;
    routes: Router;
};


const logger = new ConsoleLogger
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
        this.app.use( express.urlencoded({ extended: true }) );
        // Routes
        this.app.use( this.routes );
        

        this.app.listen(this.port, () => {
            logger.info(`Server running on port ${ this.port }`)
        });
    };
};