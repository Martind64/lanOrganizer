angular.module('LanOrganizer', [
	'app.routes',
	'ParticipantsController',
	'ParticipantsService',
	'mainCtrl',
	'userService',
	'authService',
	'userCtrl',
	'powerController',
	'powerService',
	'switchController',
	'switchService',
])




.config(function($httpProvider) {

		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor');
	});