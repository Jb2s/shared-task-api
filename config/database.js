require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize( 
  process.env.DB_NAME,      
  process.env.DB_USER,      
  process.env.DB_PASS,  
  {
    host: process.env.DB_HOST,    
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false // This disables strict SSL checks
      }
    }
  }
);

module.exports = sequelize;
