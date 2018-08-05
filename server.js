//import modules
var express = require('express');
var app = express();
var config = require('./config/database.js');
var bodyParser = require('body-parser');

//set port 
var port = process.env.PORT || 3000;

//import router
var apiRouter = require('./app/routers/apiRouter');
var pageRouter = require('./app/routers/pageRouter');

// get information from html forms
app.use(bodyParser()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set view using ejs template
app.set('view engine', 'ejs');

//define path map to router
app.use('/api',apiRouter);
app.use('/',pageRouter);

app.listen(port);
console.log('The magic happens on port : ' + port );