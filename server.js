

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const HtmlR = require("./routing/htmlRoutes");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, path.sep, "public", "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, path.sep, "public","survey.html"));
});

