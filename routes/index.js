const { response } = require("express");
var express = require("express");
const session = require("express-session");
var router = express.Router();


// const auth = require("../public/javascripts/validation");
// console.log(auth)
/* GET home page. */
let msg;

router.get("/", function (req, res, next) {
  let msg
  if (req.session.user) {
   res.redirect("/main");
  }else {
    if (req.session.msg) {
      msg = "wrong credintials";
    } else {
      msg = "";
    }
    res.render("index", { error: msg });
  }
   
});

router.post("/submit", function (req, res) {
  var uName = req.body.uName;
  var pass = req.body.password;
  if (uName == "Admin" && pass == 7994) {
    req.session.user = true;
    req.session.msg = false;
    req.session.userdata = { pass, uName };
    res.redirect("/");
  } else if (uName != "" && pass != "" && (uName != "Admin" || pass != 7994)) {
    req.session.msg = true;
    req.session.user = false;
    res.redirect("/");
  } else {
    req.session.msg = true;
  }
});

router.get("/logout", function (req, res) {
  req.session.user = false;
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
