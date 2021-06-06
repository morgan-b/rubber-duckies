const router = require("express").Router();
const { Caregiver, User } = require("../../models");
const bcrypt = require("bcrypt");

// caregiver signup
router.post("/cgsignup", async (req, res) => {
  try {
    const caregiverData = await Caregiver.create(req.body);

    req.session.save(() => {
      req.session.caregiver_id = caregiverData.caregiverid;
      req.session.logged_in = true;

      res.status(200).json({
        caregiver: caregiverData,
        cgloggedin: req.session.logged_in
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//user signup
router.post("/usersignup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.userid;
      req.session.logged_in = true;

      res.status(200).json({
        user:userData,
        loggedin:req.session.logged_in
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//caregiver login
router.post("/cglogin", async (req, res) => {
  try {
    const caregiverData = await Caregiver.findOne({
      where: { email: req.body.email },
    });

    if (!caregiverData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      caregiverData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.caregiver_id = caregiverData.caregiverid;
      req.session.logged_in = true;

      return res.json({
        caregiver: caregiverData,
        message: "You are now logged in!",
        cgloggedin: req.session.logged_in,
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//user login
router.post("/userlogin", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.userid;
      req.session.logged_in = true;

      return res.json({
        user: userData,
        loggedin: req.session.logged_in,
        message: "You are now logged in!",
      });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
