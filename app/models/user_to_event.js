var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;



var user_to_eventSchema = new Schema({
	user_id: { type: String },
	event_id: { type: String },
	user_name: { type: String },
	event_name: { type: String },
});


module.exports = mongoose.model('User_to_event', user_to_eventSchema);