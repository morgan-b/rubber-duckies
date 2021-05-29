const userRoutes = require("./userRoutes");
const assessRoutes = require("./assessRoutes");
const addUserRoutes = require("./addUserRoutes");
const router = require('express').Router();

router.use("/users", userRoutes);
router.use("/assess", assessRoutes);
//route for caregiver adding a user to their network
router.use("/adduser", addUserRoutes);

module.exports = router;
