const { dir } = require("console");
var express = require("express");
const { dirname } = require("path");
var router = express.Router();
var path = require("path");
const { response } = require("../app");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index get", req.session.user);
  if (req.session.user) {
    res.redirect("home");
  } else {
    res.render("index", { title: "person" });
  }
});

router.post("/submit", function (req, res) {
  var uName = req.body.uName;
  var pass = req.body.password;
  var error;
  if (uName == "Admin" && pass == 7994) {
    req.session.user = true;
    req.session.userdata = { pass, uName };
    res.redirect("/home");
  } else if (uName == "" && pass == "") {
    error = "enter the credentials";
    res.render("index", { error });
  } else if (uName == "" || pass == "") {
    if (pass == "") {
      error = "enter the password";
      res.render("index", { error });
    } else {
      error = "enter the username";
      res.render("index", { error });
    }
  } else {
    error = "Wrong credentials ";
    res.render("index", { error });
  }
});
router.get("/home", function (req, res) {
  if (req.session.user) {
    username = req.session.userdata.uName;
    userpass = req.session.userdata.pass;
    res.render("main", { username, userpass });
  } else {
    res.redirect("/");
  }
});

router.get("/logout", function (req, res) {
  req.session.user = false;
  res.render("index");
});

module.exports = router;
