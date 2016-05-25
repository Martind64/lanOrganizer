// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// EVENT SCHEMA
var EventSchema = new Schema({
	name: String,
	address: String, 
	description: String,
	date: String,
	switch_id: String,
});


module.exports = mongoose.model('Event', EventSchema);