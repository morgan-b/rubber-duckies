const router = require("express").Router();

const apiRoutes = require("./api");
const userRoutes = require("./userRoutes");

router.use("/api", apiRoutes);
router.use("/", userRoutes);

router.use((req, res) => {
  res.status(404).end();
});

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
