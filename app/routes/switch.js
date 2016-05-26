// require the vent model
var Switch = require('../models/switch');

module.exports = function(app, express)
{
	var switchRouter = express.Router();


	// On routes that end in /events
	//-------------------------------------------------------
	switchRouter.route('/switch')
		// create an event
		.post(function(req, res)
		{
			var eswitch			= new Switch();
			eswitch.name			= req.body.name;
			eswitch.rangetop	 	= req.body.rangetop;
			eswitch.rangebottom 	= req.body.rangebottom;


			eswitch.save(function(err)
			{
				if(err) res.send(err);
				res.json({ message: 'Switch Created!'});
			});
		})
		.get(function(req, res)
		{
			Switch.find(function(err, switches)
			{
				if(err) res.send(err);

				// return the events
				res.json(switches);
			});
		});


		// ON routes that end in /switch/switch_id
		//-----------------------------------------------------
		switchRouter.route('/switch/:switch_id')
		// find the switch with the specified switchid
		.get(function(req, res)
		{
			Switch.findById(req.params.switch_id, function(err, eswitch)
			{
				if(err) res.send(err);

				// return the event
				res.json(eswitch);
			});
		})
		// update the switch with the specified switchid
		.put(function(req, res)
		{
			Switch.findById(req.params.switch_id, function(err, eswitch)
			{
				if(err) res.send(err);

				if(req.body.name) eswitch.name = req.body.name;
				if(req.body.rangetop) eswitch.rangetop = req.body.rangetop;
				if(req.body.rangebottom) eswitch.rangebottom = req.body.rangebottom;


				// save the event
				eswitch.save(function(err)
				{
					if(err) res.send(err);

					//return a message
					res.json({ message: 'The switch has been updated'});
				});
			});
		})
		.delete(function(req, res)
		{
			Switch.remove(
			{
				_id : req.params.switch_id
			},
			function(err, eswitch)
			{
				if(err) return res.send(err);
				res.json({ message: 'the switch has been deleted'});
			});
		});
		

		return switchRouter;



}