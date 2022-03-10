import { Application } from 'express';
import userRoutes from '../../interfaces/view/auth/presentation/routes/auth_routes';

class Routes {

    private api = '/api/v1'

    private apiPaths = {
        users: `${this.api}/users`,
        auth: `${this.api}/auth`,
        products: `${this.api}/products`
    }

    allRoutes(app: Application) {
        app.use(this.apiPaths.users, userRoutes)
    }
}

export default Routes;