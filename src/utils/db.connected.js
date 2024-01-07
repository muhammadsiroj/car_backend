import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('postgres://rudewaha:6oxly49ybfqbTrUukrxdoD0jJ3ncYSig@ella.db.elephantsql.com/rudewaha', {logging: false})
const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('db is connected ....');
    } catch (error) { 
        console.error('unable to connect database');
    }
}
dbConnect()

export default sequelize