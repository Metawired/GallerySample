var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	"email" : String,
	"avatar" : String,
	"galleries": Array
});

module.exports = mongoose.model('user', userSchema);
