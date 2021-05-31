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

router.get("/find", async (req,res) => {
    console.log("REQ.BODY: ",req.body)
    try {
        const actionData = await Useractiondetail.findAll({
          where: { 
            userid: req.body
           },
        });
    
        if (!actionData) {
          res
            .status(500)
            .json({ message: "User not found please try again" });
          return;
        }
    
      return res.status(200).json(actionData);
        
      } catch (err) {
        res.status(400).json(err);
      }
})

module.exports = router;