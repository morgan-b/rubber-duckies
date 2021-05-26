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

module.exports = router;