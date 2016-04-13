var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var gallerySchema = new Schema({
  "reference": String,
	"name" : String,
	"type" : String,
	"mainImageUrl" : String,
	"thumbnails" : Array,
	"images" : Array,
	"user" : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	}
});

module.exports = mongoose.model('gallery', gallerySchema);
