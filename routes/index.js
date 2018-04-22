var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sample:sample@ds253879.mlab.com:53879/heroku_g5rrfp2d";

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_g5rrfp2d");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
        res.render('index', { title: 'Express' });
      db.close();
    });
  });  

});

module.exports = router;
