var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');
var session = require('express-session');

module.exports = function() {
  var app = express();
  app.set('view engine', 'ejs');
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true
    })
  );
  load('routes')
    .then('infra')
    .into(app);
  return app;
};
