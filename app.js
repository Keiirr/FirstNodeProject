const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

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