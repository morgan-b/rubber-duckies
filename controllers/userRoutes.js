const router = require("express").Router();
const { User,Useractiondetail } = require("../models");

router.get("/", async (req,res) => {
    console.log(req.body);
    try {
      const userData = await User.findOne({
        where: { 
          userid: req.body.userid,
          username:req.body.username
         },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "User not found please try again" });
        return;
      }
  
      return res.status(200).json(userData);
      
    } catch (err) {
      res.status(400).json(err);
    }
  })

router.get("/profile", async (req,res) => {
    try {
      const userData = await User.findAll({
        where: { 
          caregiverid: req.session.caregiver_id,
         },
         
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "User not found please try again" });
        return;
      }
  
      return  res.setHeader("Content-Type", "application/json").status(200).json(userData);
      
    } catch (err) {
      res.status(400).json(err);
    }
  })

router.get("/useremotions", async (req,res) => {
    try {
      const userData = await User.findOne({
        where: { 
          userid: req.session.user_id,
         },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: "User not found please try again" });
        return;
      }
  
      return res.status(200).json(userData);
      
    } catch (err) {
      res.status(400).json(err);
    }
  })

  router.get("/userdetails", async (req,res) => {
    console.log("REQ BODY",req.body)
        try {
    
            const actionData = await Useractiondetail.findAll({
              where:{ userid: req.body}
            }
            );
        
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
    

  module.exports=router;
  