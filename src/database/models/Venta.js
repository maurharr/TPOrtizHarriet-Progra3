const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Venta = sequelize.define('Venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productos: {
        type: DataTypes.JSON,
        allowNull: false
    },
    precio_final: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'ventas',
    timestamps: true
});

module.exports = Venta;
