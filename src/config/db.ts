import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL!, {
    
    logging: false
})



export default db;