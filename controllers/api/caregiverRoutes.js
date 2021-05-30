const router = require("express").Router();
const { Caregiver } = require("../../models");

router.get("/", async (req,res) => {
  console.log(req.body.email)
    try {
      const cgData = await Caregiver.findOne({
        where: { 
          email: req.body.email,
          // caregiverid: req.session.caregiver_id
         },
      });
  
      if (!cgData) {
        res
          .status(400)
          .json({ message: "User not found please try again" });
        return;
      }
  
    return res.status(200).json(cgData);
      
    } catch (err) {
      res.status(400).json(err);
    }
  })

  module.exports=router;
  

