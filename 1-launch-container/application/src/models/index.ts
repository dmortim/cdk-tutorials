import { Sequelize } from "sequelize";
import config from '../config';
import User from "./user.model";

const sequelize = config.environment === 'local' 
  ? new Sequelize('sqlite::memory:') : new Sequelize(config.database);


sequelize.sync().then(() => {
  console.log('Database synced');
  if (config.environment === 'local') {
    const dane = User.create({
      firstName: 'Dane',
      lastName: 'Express'
    });
  }
}).catch((err) => {
  console.log('Unable to sync database', err)
});

export { sequelize };