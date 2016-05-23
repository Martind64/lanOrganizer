angular.module('powerService', [])
	
	.factory('Power', function($http) {

		var powerFactory = {};


		powerFactory.get = function(id) {
			return $http.get('/api/power/' + id);
		};

		powerFactory.all = function() {
			return $http.get('/api/power');
		};

		powerFactory.create = function(powerData) {
			return $http.post('/api/power', powerData);
		};

		powerFactory.update = function(id, powerData) {
			return $http.put('/api/power/' + id, powerData);
		};

		powerFactory.delete = function(id) {
			return $http.delete('/api/power/' + id);
		};


		return powerFactory;
	});