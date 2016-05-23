// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// EVENT SCHEMA
var PowerSchema = new Schema({
	name: String,
	location: String,
});


module.exports = mongoose.model('Power', PowerSchema);