var express = require('express');

var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

module.exports = router;