"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./src/core/connection"));
const routes_1 = __importDefault(require("./src/features/routes"));
class Server {
    constructor() {
        this.routes = new routes_1.default();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        (0, connection_1.default)();
        this.middleware();
        this.routes.allRoutes(this.app);
    }
    middleware() {
        //CORS
        this.app.use((0, cors_1.default)());
        //LECTURA DEL BODY
        this.app.use(express_1.default.json());
        //PUBLIC FOLDER
        this.app.use(express_1.default.static('public'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server running ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map