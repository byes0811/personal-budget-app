const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-config');

const User = sequelize.define('User', {
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_hash: { type: DataTypes.STRING, allowNull: false }
});

module.exports = User;
