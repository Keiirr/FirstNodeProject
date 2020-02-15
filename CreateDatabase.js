var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Library";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Library");
    dbo.createCollection("Users", function(err, res) {
      if (err) throw err;
      console.log("Users Collection created!");   
    });
    dbo.createCollection("Books", function(err, res) {
        if (err) throw err;
        console.log("Books Collection created!");   
      });

  });