const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.put("/", async (req, res) => {
  try {
    const userData = await User.update(
      {
        happy: req.body.happy,
        sad: req.body.sad,
        nervous: req.body.nervous,
        hungry: req.body.hungry,
        thirsty: req.body.thirsty,
        restroom: req.body.restroom,
      },
      {
        where: {
          userid: req.session.user_id,
        },
      }
    );

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
