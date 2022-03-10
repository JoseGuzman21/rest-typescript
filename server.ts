import express, { Application } from 'express';
import cors from 'cors';
import connectionDb  from './src/core/connection';
import Routes from './src/features/routes';

class Server {
    private app: Application;
    private port: string | undefined;

    private routes = new Routes();

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        connectionDb();

        this.middleware();

        this.routes.allRoutes(this.app);
    }

    middleware() {
        //CORS
        this.app.use(cors());

        //LECTURA DEL BODY
        this.app.use(express.json());

        //PUBLIC FOLDER
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running ${this.port}`);
        });
    }
}

export default Server;
