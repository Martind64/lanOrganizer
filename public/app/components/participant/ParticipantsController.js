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
					$location.path('/MyEvents/' + userid);
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

	.controller('eventEditController', function($routeParams, Pevent) {
		var vm = this;

		//variable to hide/show elements of the view
		// differentiates between create or edit pages
		vm.type = 'edit';

		// get the user data for user
		// $routeParams is the way we grab data from the URL
		Pevent.get($routeParams.event_id)
			.success(function(data) {
				vm.eventData = data;
			});
		Pevent.getParticipantEvents($routeParams.event_id)
			.success(function(data) {
				//noget med data her --
				vm.participants = data;
			});

			vm.assignIp = function() {
				vm.message= '';
				Pevent.assignip($routeParams.eventid)
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



