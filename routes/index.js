const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {layout: 'default', template: 'home-template'});
  });

router.get('/test', (req, res) => {
    res.render('test');
});

module.exports = router;