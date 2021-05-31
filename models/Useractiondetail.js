const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Useractiondetail extends Model {}

Useractiondetail.init(
  {
    userActionDetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userInput: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "userid",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "useractiondetail",
  }
);

module.exports = Useractiondetail;
