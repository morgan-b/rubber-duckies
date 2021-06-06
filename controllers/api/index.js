const userRoutes = require("./userRoutes");
const assessRoutes = require("./assessRoutes");
const addUserRoutes = require("./addUserRoutes");
const router = require("express").Router();
const caregiverRoutes = require("./caregiverRoutes");
const userActionDetail = require("./userActionDetail");

router.use("/users", userRoutes);
router.use("/assess", assessRoutes);
router.use("/adduser", addUserRoutes);
router.use("/caregiver", caregiverRoutes);
router.use("/useraction", userActionDetail);

module.exports = router;
