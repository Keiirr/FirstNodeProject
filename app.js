const express = require('express');
var bodyParser = require("body-parser"); 
const routes = require('./routes/');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.set('view engine', 'hbs');

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "default",
    layoutsDir: "views/layouts/"
  })
);

app.use('/', routes);

module.exports = app;