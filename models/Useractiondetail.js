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
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
    timestamps: false,
    freezeTableName: true,
    modelName: "useractiondetail",
  }
);

module.exports = Useractiondetail;
