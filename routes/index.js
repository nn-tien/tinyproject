var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://sample:sample@ds253879.mlab.com:53879/heroku_g5rrfp2d";

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.app.get("env"));
  //res.render('index', { title: 'Express' });

  // MongoClient.connect(
  //   url,
  //   function(err, db) {
  //     if (err) throw err;
  //     var dbo = db.db("heroku_g5rrfp2d");

  //     dbo
  //       .collection("customers")
  //       .find({})
  //       .toArray(function(err, result) {
  //         if (err) throw err;
  //         console.log(result);
  //         db.close();
  //       });

  //     // dbo.createCollection("customers1", function(err, res) {
  //     //   if (err) throw err;
  //     //   //res.render('index', { title: 'Express' });
  //     //   db.close();
  //     // });
  //   }
  // );
  // let database = null;
  // MongoClient.connect(url)
  //   .then(db => {
  //     database = db;
  //     var dbo = db.db("heroku_g5rrfp2d");
  //     return dbo.collection("customers");
  //   })
  //   .then(customer => {
  //     return customer.find({}).toArray();
  //   })
  //   .then(result => {
  //     database.close();
  //   })
  //   .catch(err => {});

  //let con = MongoClient.connect(url);

  MongoClient.connect(url)
    .then(conn => {
      let db = conn.db("heroku_g5rrfp2d");

      let cus = db
        .collection("customers")
        .find({})
        .toArray();

      Promise.all([cus])
        .then(function(value) {
          //let c = value[0];
          console.log(value[0]);
          conn.close();
        })
        .catch(function(error) {
          db.close();
        });
    })
    .catch(function(error) {
      console.log(error);
    });
  res.render("index", { title: "Express" });
  // MongoClient.connect(url).then(conn => {
  //   return conn
  //     .db("heroku_g5rrfp2d")
  //     .collection("customers12")
  //     .then(col => {})
  //     .find({})
  //     .limit(10)
  //     .toArray()
  //     .then(out => {
  //       console.log(out);
  //       res.render("index", { title: "Express" });
  //     })
  //     .then(() => conn.close())
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });
});

module.exports = router;
