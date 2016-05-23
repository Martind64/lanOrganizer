angular.module('switchService', [])
	
	.factory('Switch', function($http) {

		var switchFactory = {};


		switchFactory.get = function(id) {
			return $http.get('/api/switch/' + id);
		};

		switchFactory.all = function() {
			return $http.get('/api/switch');
		};

		switchFactory.create = function(switchData) {
			return $http.post('/api/switch', switchData);
		};

		switchFactory.update = function(id, switchData) {
			return $http.put('/api/switch/' + id, switchData);
		};

		switchFactory.delete = function(id) {
			return $http.delete('/api/switch/' + id);
		};


		return switchFactory;
	});