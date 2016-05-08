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


		//paticipant events
	.when('/events', {
			templateUrl : 'app/components/participant/views/all.html',
				controller : 'eventController',
				controllerAs : 'event'
		})

	.when('/myevents', {
			templateUrl : 'app/components/participant/views/my.html',
				controller : 'MyeventController',
				controllerAs : 'event'
		})

	.when('/event/:event_id', {
			templateUrl : 'app/components/participant/views/single.html',
				controller : 'SingleeventController',
				controllerAs : 'event'
		})


	//participant profile
	.when('/profile/:participant_id', {
		templateUrl : 'app/components/participant/views/profile.html',
			controller : 'profileController',
			controllerAs: 'participant'
	})

	

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});