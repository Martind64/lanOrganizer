angular.module('ParticipantsController', ['ParticipantsService'])
	

	.controller('eventController', function(Pevent, $location){
		var vm = this;


		Pevent.all()
			.success(function(data) {
				vm.events = data
			});


		vm.Signup = function(userid, eventid) {
			Pevent.signup(userid, eventid)
				.success(function(data) {
					$location.path('/myyevents/' + userid);
				});
		};
	})

	.controller('MyeventController', function($routeParams, Pevent) {
		var vm = this;

		Pevent.MyEvents($routeParams.user_id)
				.success(function(data) {
					vm.events = data;
				});



		
	})

	.controller('SingleeventController', function($routeParams, Pevent) {
		var vm = this;

		Pevent.get($routeParams.event_id)
			.success(function(data) {
				vm.eventdata = data;
			});
		
	})


	.controller('eventCreateController', function(Pevent) {
		var vm = this;

		// variable to show/hide elements of the view
		// differentiates between create or edit pages
		vm.type = "create";

		Pevent.getSwitches()
			.success(function(data) {
				console.log(data);
				vm.switches = data;
			});


		// function to create a user
		vm.saveEvent = function() {
			//vm.processing = true;

			// clear the message
			vm.message = '';

			// use the create function in the userService
			Pevent.create(vm.eventData)
				.success(function(data) {
					//vm.processing = false;

					// clear the form
					vm.eventData = {};
					vm.message = data.message;
				});
		};
	})

	.controller('eventEditController', function($routeParams, $location, Pevent) {
		var vm = this;

		//variable to hide/show elements of the view
		// differentiates between create or edit pages
		vm.type = 'edit';

		// get the user data for user
		// $routeParams is the way we grab data from the URL
		Pevent.get($routeParams.event_id)
			.success(function(data) {
				vm.eventData = data;
				console.log(data);
			});
		Pevent.getParticipantEvents($routeParams.event_id)
			.success(function(data) {
				//noget med data her --
				vm.participants = data;
			});

		Pevent.getipforuser($routeParams.event_id)
			.success(function(data) {
				vm.ips = data;
			});

		Pevent.getpowerforuser($routeParams.event_id)
			.success(function(data) {
				vm.powers = data;
			});

			vm.deleteEvent = function(id) {
				vm.processing = true;
				Pevent.delete(id)
					.success(function(data) {
						$location.path('/events/');
					});
			};

			vm.assignIp = function(eventid) {
				vm.message= '';
				console.log('hit outside ' + eventid);
				Pevent.assignip(eventid)
					.success(function(data) {
						console.log('hit inside');
						vm.message = data.message;
					});
			};
			vm.assignPower = function(eventid) {
				vm.message= '';
				Pevent.assignpower(eventid)
					.success(function(data) {
						vm.message = data.message;
					});
			};
			// function to save the user
			vm.saveEvent = function() {
				//vm.processing = true;
				vm.message = '';
				
				// call the userService function to update
				Pevent.update($routeParams.event_id, vm.eventData)
					.success(function(data) {
						//vm.processing = false;
						
						// clear the form
						vm.eventData = {};

						// bind the message from our API
						vm.message = data.message;
					});
			};
	})

	.controller('profileController', function($routeParams, Pevent) {
		var vm = this;

		Pevent.getParticipant($routeParams.participant_id)
			.success(function(data) {
				vm.participantData = data;
			});
	})



