//import modules
var express = require('express');
var app = express();
var config = require('./config/database.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//setting database
mongoose.connect(config.url);

//set port 
var port = process.env.PORT || 3000;

//import router
var apiRouter = require('./app/controllers/apiRouter');
var pageRouter = require('./app/controllers/pageRouter');

// get information from html forms
app.use(bodyParser()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//allow web page can access control to the api
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  });

//set view using ejs template
app.set('view engine', 'ejs');

//define path map to router
app.use('/api',apiRouter);
app.use('/',pageRouter);

app.listen(port);
console.log('The magic happens on port : ' + port );