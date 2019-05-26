// Dependencies
// =============================================================
const express = require ("express");
const path = require("path");
const router = express.Router ();
var friends = require ("../app/data/friends");


router.get("/", function (req, res) {
   res.json(friends);
});

router.get("/api/friends", function (req, res) {
    res.json(friends);
});

module.exports = router;