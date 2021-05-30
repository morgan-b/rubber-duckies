const router = require('express').Router();

const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');
// const caregiverRoutes = require('./api/caregiverRoutes')

router.use('/api', apiRoutes);
router.use('/', userRoutes);
// router.use('/caregiver', caregiverRoutes)

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;