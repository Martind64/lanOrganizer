angular.module('ParticipantsService', [])


	.factory('Pevent', function($http) {

		var pfactory = {};

		//gets all events
		pfactory.all = function() {
			return $http.get('/api/events');
		};


		//gets my events
		pfactory.MyEvents = function(userid){
			return $http.get('/events/myevents/' + userid);
		};

		//get a single event
		pfactory.get = function(eventid){
			return $http.get('/api/events/' + eventid);
		};

		//get information about a participant
		pfactory.getParticipant = function(userid) {

		};


		return pfactory;
	});