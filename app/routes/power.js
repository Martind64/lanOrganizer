// require the vent model
var Power = require('../models/power');

module.exports = function(app, express)
{
	var powerRouter = express.Router();


	// On routes that end in /events
	//-------------------------------------------------------
	powerRouter.route('/power')
		// create an event
		.post(function(req, res)
		{
			var power			= new Power();
			power.name			= req.body.name;
			power.location	 	= req.body.location;


			power.save(function(err)
			{
				if(err) res.send(err);
				res.json({ message: 'power Created!'});
			});
		})
		.get(function(req, res)
		{
			Power.find(function(err, powers)
			{
				if(err) res.send(err);

				// return the events
				res.json(powers);
			});
		});


		// ON routes that end in /switch/switch_id
		//-----------------------------------------------------
		powerRouter.route('/power/:power_id')
		// find the switch with the specified powerid
		.get(function(req, res)
		{
			Power.findById(req.params.power_id, function(err, power)
			{
				if(err) res.send(err);

				// return the event
				res.json(power);
			});
		})
		// update the switch with the specified power_id
		.put(function(req, res)
		{
			Power.findById(req.params.power_id, function(err, power)
			{
				if(err) res.send(err);

				if(req.body.name) power.name = req.body.name;
				if(req.body.location) power.location = req.body.location;


				// save the event
				power.save(function(err)
				{
					if(err) res.send(err);

					//return a message
					res.json({ message: 'The power has been updated'});
				});
			});
		})
		.delete(function(req, res)
		{
			Power.remove(
			{
				_id : req.params.power_id
			},
			function(err, power)
			{
				if(err) return res.send(err);
				res.json({ message: 'the power has been deleted'});
			});
		});
		

		return powerRouter;



}