import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/vendors.sqlite',
  logging: false
});

export default sequelize; 
