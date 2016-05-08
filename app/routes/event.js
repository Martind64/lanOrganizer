// require the vent model
var Event = require('../models/event');

module.exports = function(app, express)
{
	var eventRouter = express.Router();


	// On routes that end in /events
	//-------------------------------------------------------
	eventRouter.route('/events')
		// create an event
		.post(function(req, res)
		{
			var pEvent			= new Event();
			pEvent.name			= req.body.name;
			pEvent.address	 	= req.body.address;
			pEvent.description 	= req.body.description;


			pEvent.save(function(err)
			{
				if(err) res.send(err);
				res.json({ message: 'Event Created!'});
			});
		})
		.get(function(req, res)
		{
			Event.find(function(err, events)
			{
				if(err) res.send(err);

				// return the events
				res.json(events);
			});
		});

		// ON routes that end in /event/event_id
		//-----------------------------------------------------
		eventRouter.route('/events/:event_id')
		// find the eventon the specified eventId
		.get(function(req, res)
		{
			Event.findById(req.params.event_id, function(err, event)
			{
				if(err) res.send(err);

				// return the event
				res.json(event);
			});
		})
		// update the event on the specified eventId
		.put(function(req, res)
		{
			Event.findById(req.params.event_id, function(err, pEvent)
			{
				if(err) res.send(err);

				if(req.body.name) pEvent.name = req.body.name;
				if(req.body.address) pEvent.address = req.body.address;
				if(req.body.description) pEvent.description = req.body.description;


				// save the event
				pEvent.save(function(err)
				{
					if(err) res.send(err);

					//return a message
					res.json({ message: 'The event has been updated'});
				});
			});
		})
		.delete(function(req, res)
		{
			Event.remove(
			{
				_id : req.params.event_id
			},
			function(err, pEvent)
			{
				if(err) return res.send(err);
				res.json({ message: 'the event has been deleted'});
			});
		});


		return eventRouter;



}