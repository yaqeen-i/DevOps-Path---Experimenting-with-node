const app = require('./src/app');
const sequelize = require('./src/config/db');
require('dotenv').config();

const PORT = process.env.PORT ;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    await sequelize.sync({ alter: true });
    console.log('Models synchronized.');

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to start server:', error.message);
  }
})();
