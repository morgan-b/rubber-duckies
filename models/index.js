const Caregiver = require("./Caregiver");
const User = require("./User");
const Useractiondetail = require("./Useractiondetail");

User.belongsTo(Caregiver, {
  foreignKey: "user_id",
});

Caregiver.hasMany(User, {
  foreignKey: "user_id",
});

module.exports = {
  Caregiver,
  User,
  Useractiondetail,
};
