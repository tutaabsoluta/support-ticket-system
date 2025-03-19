import express, { Router } from 'express';
import cors, { CorsOptions } from 'cors'
import compression from 'compression';
import { envs } from '../config/envs';

interface Options {
    port: number;
    routes: Router;
};

export class Server {

    // express instance
    public readonly app = express();
    private serverListener: any;

    // Server props
    private readonly port: number;
    private readonly routes: Router;


    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes
    };

    // start method
    async start() {

        // Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());

        // CORS
        this.app.use(cors(this.corsOptions));

        // Routes
        this.app.use(this.routes);



        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })

    };

    // CORS
    private corsOptions: CorsOptions = {
        origin: function (origin, callback) {
            console.log('Origin:', origin);
                
            if ( !origin || envs.FRONTEND_URL ) {
                callback(null, true); 
            } else {
                callback(new Error('Not allowed by CORS')); 
            }
        }
    };

    public close() {
        this.serverListener?.close();
    };
};

// origin: quien esta enviando la peticion