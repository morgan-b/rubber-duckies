const userRoutes = require("./userRoutes");
const assessRoutes = require("./assessRoutes");
const router = require('express').Router();

router.use("/users", userRoutes);
router.use("/assess", assessRoutes);

module.exports = router;
