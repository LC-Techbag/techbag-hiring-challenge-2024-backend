import express from 'express';
import bodyParser from 'body-parser'; 
import vendorRoutes from './routes/vendor.routes';
import sequelize from './config/database.config';

const app = express();

app.use(bodyParser.json());

app.use('/vendors', vendorRoutes); 

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Database connected');

    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database or start server:', error);
  }
})();
