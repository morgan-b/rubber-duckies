const router = require("express").Router();
const { User } = require("../../models");

router.put("/", async (req, res) => {
  try {
    const userData = await User.update(
      {
        caregiverid: req.session.caregiver_id,
      },
      {
        where: {
          userid: req.body.userid,
        },
      }
    );

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
