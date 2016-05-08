angular.module('ParticipantsController', ['ParticipantsService'])
	

	.controller('eventController', function(pevent){
		var vm = this;


		pevent.all()
			.success(function(data) {
				vm.events = data
			});
	})

	.controller('MyeventController', function($routeParams, pevent) {
		var vm = this;

		pevent.MyEvents($routeParams.event_id)
				.success(function(data) {
					vm.events = data;
				});
	})

	.controller('SingleeventController', function($routeParams, pevent) {
		var vm = this;

		pevent.get($routeParams.event_id)
			.success(function(data) {
				vm.eventdata = data;
			});
	})

	.controller('profileController', function($routeParams, participant) {
		var vm = this;

		participant.getParticipant($routeParams.participant_id)
			.success(function(data) {
				vm.participant = data;
			});
	})



