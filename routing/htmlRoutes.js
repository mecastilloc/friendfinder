// Dependencies
// =============================================================
const express = require ("express");
const path = require("path");
const router = express.Router ();


 // Basic route that sends the user to the correct html page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, path.sep, "../public", "home.html"));
});

router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, path.sep, "../public","survey.html"));
});



module.exports = router;

