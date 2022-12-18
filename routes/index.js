const { dir } = require("console");
var express = require("express");
const session = require("express-session");
const { access } = require("fs");
const { dirname } = require("path");
var router = express.Router();
var path = require("path");
const { response } = require("../app");
// const auth = require("../public/javascripts/validation");
// console.log(auth)
/* GET home page. */

router.get("/", function (req, res, next) {
  if (req.session.user) {
    username = req.session.userdata.uName;
    userpass = req.session.userdata.pass;
    res.render("main", { username, userpass });
  } else {
    res.render("index");
  }
});

router.post("/submit", function (req, res) {
  var uName = req.body.uName;
  var pass = req.body.password;
  if (uName == "Admin" && pass == 7994) {
    req.session.user = true;
    req.session.userdata = { pass, uName };
    res.redirect("/");
  } else {
    req.session.user = false;
  }
});

router.get("/logout", function (req, res) {
  req.session.user = false;
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
