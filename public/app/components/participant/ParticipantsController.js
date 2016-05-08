angular.module('ParticipantsController', ['ParticipantsService'])
	

	.controller('eventController', function(Pevent){
		var vm = this;


		Pevent.all()
			.success(function(data) {
				vm.events = data
			});
	})

	.controller('MyeventController', function($routeParams, Pevent) {
		var vm = this;

		Pevent.MyEvents($routeParams.event_id)
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

	.controller('profileController', function($routeParams, Pevent) {
		var vm = this;

		Pevent.getParticipant($routeParams.participant_id)
			.success(function(data) {
				vm.participant = data;
			});
	})



