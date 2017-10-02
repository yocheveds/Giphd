// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // // Get all giphys
  // app.get("/api/all", function(req, res) {
  //
  //   // var dbQuery = "SELECT * FROM gif_tinder2";
  //
  //   connection.query(dbQuery, function(err, result) {
  //     res.json(result);
  //   });

  //   app.get("/api/chat", function(req, res) {
  //
  //     var dbQuery = "SELECT * FROM gif_tinder2";
  //
  //     connection.query(dbQuery, function(err, result) {
  //       res.json(result);
  //     });
  //
  // });

  app.post("/api/new", function(req, res) {

    console.log("Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO gif_tinder2db (, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.user_name, req.body.user_age, req.body.user_zip, req.body.user_gender], function(err, result) {
      console.log("data successfully saved!");
      res.end();
    });

});
}
