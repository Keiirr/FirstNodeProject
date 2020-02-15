const app = require('./app');
var mongo = require('mongodb');
const mongoose = require('mongoose');

const db = require('./CreateDatabase');

mongoose.connect('mongodb://localhost:27017/Library', function(err) {
    if (err) {
        console.err(err);
    } else {
        console.log('Connected');
    }    
    });

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
