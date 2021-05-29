const router = require("express").Router();
const { UserActionDetail } = require("../../models");

router.post("/", async (req, res) => {

    try {
        const userActionData = await UserActionDetail.create(
            {
                userInput: req.body.userinput
            },
            {
                where: {
                    userid: req.session.user_id,
                },
            }
        );

        res.status(200).json(userActionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;