var express = require('express');
var router = express.Router();

var package = require("../package.json")

/*
 * GET
 */
router.get('/', function(req, res) {
    res.json({doc:"./doc",version:package.version});
});

// Health check
router.get('/sys/info/ping', function(req, res) {
	res.set('Content-Type', 'text/plain');
    res.send("\"OK\"");
});
 
module.exports = router;