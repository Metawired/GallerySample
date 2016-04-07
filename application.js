var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var galleries = require('./routes/galleries');

var app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/api/', index);
app.use('/api/galleries', users);
app.use('/api/users', galleries);

var mongoUrl =  process.env.FH_MONGODB_CONN_URL || 'mongodb://localhost:27017/gallery';
mongoose.connect(mongoUrl);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	var port = process.env.FH_PORT || 8000;
	var host = '0.0.0.0';
	app.listen(port, host, function() {
	  console.log("App started at: " + new Date() + " on port: " + port); 
	});
});
