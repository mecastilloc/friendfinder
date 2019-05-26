// Dependencies
// =============================================================
const express = require ("express");
const path = require("path");
const router = express.Router ();
var app = express();
var friends = require ("../app/data/friends");


router.get("/", function (req, res) {
   res.json(friends);
});

router.get("/api/friends", function (req, res) {
    res.json(friends);
});


router.post("/", function (req, res) {
    var userData = req.body;
    friends.push(userData);
    res.json(userData);
 });

router.post("/api/friends", function(req, res){
    var userData = req.body;
    friends.push(userData);
    res.json(userData);
        
});

module.exports = router;