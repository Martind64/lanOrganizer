// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;
var bcrypt		= require('bcrypt-nodejs')

// EVENT SCHEMA
var EventSchema = new Schema({
	name:
	address:
	description:
});


module.exports = mongoose.model('Event', EventSchema);