var express = require("express");
var router = express.Router();


router.get("/",function(req,res,next){
 let msg
    if (req.session.user) {
      username = req.session.userdata.uName;
      userpass = req.session.userdata.pass;
      res.render("main",{username,userpass});
    }else {
    res.render("index", { error: msg });
  }
  })

  module.exports=router;