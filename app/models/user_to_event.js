var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;



var user_to_eventSchema = new Schema({
	user_id: { type: String },
	event_id: { type: String },
});