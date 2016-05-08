// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;
var bcrypt		= require('bcrypt-nodejs')

// EVENT SCHEMA
var EventSchema = new Schema({
	name: String,
	address: String, 
	description: String,
});


module.exports = mongoose.model('Event', EventSchema);