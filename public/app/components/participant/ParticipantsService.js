angular.module('ParticipantsService', [])


	.factory('Pevent', function($http) {

		var pfactory = {};

		//gets all events
		pfactory.all = function() {

		};


		//gets my events
		pfactory.MyEvents = function(userid){

		};

		//get a single event
		pfactory.get = function(eventid){

		};

		//get information about a participant
		pfactory.getParticipant = function(userid) {

		};


		return pfactory;
	});