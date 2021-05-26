const router = require('express').Router();
const { Caregiver } = require('../../models');
const bcrypt = require('bcrypt');


router.post('/cgsignup', async (req, res) => {
    try {
        const caregiverData = await Caregiver.create(req.body);

        req.session.save(() => {
            req.session.caregiver_id = caregiverData.id;
            req.session.logged_in = true;

            res.status(200).json(caregiverData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/cglogin', async (req, res) => {
    console.log(req.body)
    try {
        const caregiverData = await Caregiver.findOne({ where: { email: req.body.email } });

        if (!caregiverData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            caregiverData.password
        );

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.caregiver_id = caregiverData.id;
            req.session.logged_in = true;

            return res.json({ caregiver: caregiverData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;