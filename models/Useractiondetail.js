const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Useractiondetail extends Model { }

Useractiondetail.init(
    {
        UserActionDetailId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        UserEmotion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userid: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'useractiondetail',
    }
);

module.exports = Useractiondetail;