const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-config');

const Transaction = sequelize.define('Transaction', {
    type: { type: DataTypes.ENUM('income', 'expense'), allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    category: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATEONLY, allowNull: false }
});

module.exports = Transaction;
