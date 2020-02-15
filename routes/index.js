const express = require('express');
const User = require('../models/User');
var bodyParser = require("body-parser");
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {layout: 'default', template: 'home-template'});
  });

router.get('/test', (req, res) => {
    res.render('test');
});

router.get('/register', (req, res) => {
  res.render('register', {layout: 'default', template: 'home-template'});
});

router.post('/register', (req, res) => {
  if (req.body.email &&
    req.body.username &&
    req.body.password) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    }

    User.create(userData, function (err, user) {
      if (err) {
        return next(err)
      } else {
        return res.redirect('/');
      }
    });
  }
});


module.exports = router;