//import express library
var express = require('express');
var router = express.Router();

//render index page
router.get('/',function(req,res){
    res.render('index.ejs');
})

module.exports = router;