// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// EVENT SCHEMA
var Ip_to_eventSchema = new Schema({
	event_id: String,
	user_id: String, 
	ip: String,
	gateway: String,
	dns: String,
});


module.exports = mongoose.model('Ip_to_event', Ip_to_eventSchema);