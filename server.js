// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./app/config/connection.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("app/public"));

var http = require('http').Server(app);
var io = require('socket.io')(http);
  
io.on('connection', function (socket) {
  socket.broadcast.emit('newUser', 'New User Joined, Say Hi :D');
  socket.on('setUser', function (username) {
    console.log(username); //here you have your user name
  });
  socket.on('chatMessage', function (msg) {
    io.emit('chatMessage', msg);
  });
});

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});