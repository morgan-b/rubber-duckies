const router = require("express").Router();
const { Useractiondetail } = require("../../models");

router.post("/", async (req, res) => {
console.log(req.body.userinput)
console.log(req.session.user_id)
    try {
        const userActionData = await Useractiondetail.create(
            {
                userInput: req.body.userinput,
                userid: req.session.user_id
            }
        );

        res.status(200).json(userActionData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;