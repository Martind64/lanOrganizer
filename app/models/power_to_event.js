// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// EVENT SCHEMA
var Power_to_eventSchema = new Schema({
	event_id: String,
	user_id: String, 
	power_id: String,
	power_location: String,
	power_name: String,
});


module.exports = mongoose.model('Power_to_event', Power_to_eventSchema);