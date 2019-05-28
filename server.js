

// Dependencies
// =============================================================
var express = require("express");
//var path = require("path");
const html = require("./routing/htmlRoutes");
const friends = require("./routing/apiRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


var actual = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


app.use("/api/friends", friends);
app.use("/", html);
// app.use(express.static('public'));

app.use('/public',express.static('public'));
