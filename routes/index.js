const { dir } = require('console');
var express = require('express');
const { dirname } = require('path');
var router = express.Router();
var path=require("path");

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index',{title:"person"})
});


router.post('/submit',function(req,res){
  var pass=req.body.password;
  res.render('index',{password:pass})
})
router.get('/signup', function(req, res, next) {
  res.render('signup',{title:"signup"})
});




module.exports = router;
