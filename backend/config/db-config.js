const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('budget_db', 'root', 'password', {
    define: {
        timestamps: false,
    },
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
});

module.exports = sequelize;
