var express = require('express');
var router = express.Router();

var package = require("../package.json")
/*
 * GET
 */
router.get('/', function(req, res) {
    res.json({doc:"./doc",version:package.version});
});

 
module.exports = router;