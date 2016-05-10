// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// EVENT SCHEMA
var SwitchSchema = new Schema({
	name: String,
	rangetop: String,
	Rangebottom: String,
});


module.exports = mongoose.model('Switch', SwitchSchema);