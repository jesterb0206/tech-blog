require('dotenv').config();

const Sequelize = require('sequelize');

// If a JawsDB url exists connect to a Heroku server, otherwise connect to your localhost server

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: '127.0.0.1',
        dialect: 'mysql',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
