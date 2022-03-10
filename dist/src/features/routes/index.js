"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_routes_1 = __importDefault(require("../../interfaces/view/auth/presentation/routes/auth_routes"));
class Routes {
    constructor() {
        this.api = '/api/v1';
        this.apiPaths = {
            users: `${this.api}/users`,
            auth: `${this.api}/auth`,
            products: `${this.api}/products`
        };
    }
    allRoutes(app) {
        app.use(this.apiPaths.users, auth_routes_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=index.js.map