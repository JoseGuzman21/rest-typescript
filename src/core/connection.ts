import { Sequelize } from 'sequelize';

export const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const connectionDb = async () => {
    try {
        await db.authenticate();
        console.log('database online')
    } catch (err) {
        throw new Error('No se pudo conectar a la DB');
    }
}

export default connectionDb;
