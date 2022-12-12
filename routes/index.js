const { dir } = require("console");
var express = require("express");
const session = require("express-session");
const { dirname } = require("path");
var router = express.Router();
var path = require("path");
const { response } = require("../app");

/* GET home page. */


router.get("/", function (req, res, next) {
  let msg
  if (req.session.user) {
    username = req.session.userdata.uName;
    userpass = req.session.userdata.pass;
    res.render("main", { username, userpass });
  } else {
    if (req.session.msg) {
      msg='Wrong Credentials'
    }else{
      msg=''
    }

    res.render("index", { error: msg });
  }
});

router.post("/submit", function (req, res) {
  if (!req.session.user) {
    var uName = req.body.uName;
  var pass = req.body.password;
  if (uName == "Admin" && pass == 7994) {
    req.session.user = true;
    req.session.userdata = { pass, uName };
    req.session.msg=false
  }else {
    req.session.msg=true  
  }
  }
  res.redirect("/");
});



router.get("/logout", function (req, res) {
req.session.user = false;
req.session.destroy();
  res.redirect("/");
});

module.exports = router;
