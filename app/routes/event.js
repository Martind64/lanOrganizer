// require the vent model
var Event = require('../models/event');
var MyEvent = require('../models/user_to_event');
var User = require('../models/user');
var Ip_to_event = require('../models/ip_to_event');
var Power_to_event = require('../models/power_to_event');
var Switch = require('../models/switch');
var Power = require('../models/power');

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
			pEvent.date 	= req.body.date;


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


		//returning all events for a user
	eventRouter.route('/events/myevents/:user_id')
		.get(function(req, res) {
			MyEvent.find({'user_id' : req.params.user_id}, function(err, events) {
				if (err) res.send(err);

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
				if(req.body.date) pEvent.date = req.body.date;


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

		//sign user up for event
		eventRouter.route('/events/signup/:event_id/:user_id')

		.post(function(req, res)
		{
			var user_to_event = new MyEvent();
			
			User.findById(req.params.user_id, function(err, u) {
				Event.findById(req.params.event_id, function(err, ev) {
					
					user_to_event.user_id		= req.params.user_id;
					user_to_event.event_id	 	= req.params.event_id;
					user_to_event.user_name 	= u.name;
					user_to_event.event_name	= ev.name;
					user_to_event.save(function(err)
					{
						if(err) res.send(err);
						res.json({ message: 'Event Created!'});
					});
				});	
			});	
			

			
			//var user_to_event			= new MyEvent();
			//user_to_event.user_id		= req.params.user_id;
			//user_to_event.event_id	 	= req.params.event_id;
			//user_to_event.user_name 	= 
			//user_to_event.event_name	= "test";
			


			
		});

		eventRouter.route('/events/participants/:event_id')
			.get(function(req, res) {
				MyEvent.find({'event_id' : req.params.event_id}, function(err, participants) {
					if (err) res.send(err);

					res.json(participants);
				});
			});

		eventRouter.route('/event/assignip/:event_id/')
			.post(function(req, res) {

				Event.findById(req.params.event_id, function(err, pevent) {
					
					Switch.findById(pevent.switch_id, function(err, pswitch) {
						
						MyEvent.find({'event_id' : req.params.event_id}, function(err, participants) {
							if (err) res.send(err);
							console.log(participants.length);
							var rangestart = pswitch.rangebottom;
							for(i=0;i < participants.length;i++){
								var ip = new Ip_to_event();
								ip.user_id = participants[i].user_id;
								ip.event_id = pevent._id;
								ip.dns = "Brug googles dns";
								ip.ip = rangestart;
								ip.gateway = "192.168.0.1";
								rangestart ++;
								ip.save(function(err) {
									if (err) res.send(err);
								});
							}

							res.json({ message : 'Ip´s assigned!'});
						});
					});

				});

				
			});

		eventRouter.route('/event/assignpower/:event_id')
			.post(function(req, res) {
				Event.findById(req.params.event_id, function(err, pevent) {
					
					Power.find(function(err, powers) {

						MyEvent.find({'event_id' : req.params.event_id}, function(err, participants) {
							if (err) rs.send(err);

							
							for(i=0;i <participants.length;i++){
								var power = new Power_to_event();

								if (powers[i] == null) {
									power.power_id = "nill";
									power.power_location = "nill";
									power.power_name = "nill";
								} else {
									power.power_id = powers[i]._id;
									power.power_location = powers[i].location;
									power.power_name = powers[i].name;
								}


								console.log('hit');
								power.event_id = req.params.event_id;
								power.user_id = participants[i].user_id;
								power.save(function(err) {
									if (err) res.send(err);
								});
							}

							res.json({ message : 'Power assigned!'});
						});
					});

				});
			});

			eventRouter.route('/event/power/:event_id')
				.get(function(req, res) {
					Power_to_event.find({'event_id' : req.params.event_id }, function(err, powers) {
						if (err) res.send(err);

						res.json(powers);
					});
				});

			eventRouter.route('/event/ip/:event_id')
				.get(function(req, res) {
					Ip_to_event.find({'event_id' : req.params.event_id }, function(err, ips) {
						if (err) res.send(err);

						res.json(ips);
					});
				});

		
		

		return eventRouter;



}