const app = require('./app');
const mongoose = require('mongoose');

// Connect to the db
mongoose.connect("mongodb://localhost:27017/", function (err, db) {
   
     if(err) throw err;
     console.log("Mongodb is running " + mongoose.version)
     //Write databse Insert/Update/Query code here..
});

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
