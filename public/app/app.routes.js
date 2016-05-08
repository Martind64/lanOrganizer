angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	// Route for the homepage
	.when('/', 
	{
		templateUrl : 'app/shared/homepage.html'
	})



	// login page
		.when('/login', {
			templateUrl : 'app/shared/login.html',
				controller : 'mainController',
				controllerAs: 'login'
		})


		//user events
	.when('/events', {
			templateUrl : 'app/components/participant/views/all.html',
				controller : 'eventController',
				controllerAs : 'event'
		})

	

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});