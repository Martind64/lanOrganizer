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



		//Show all users
		.when('/users', {
			templateUrl : 'app/components/user/views/all.html',
				controller : 'userController',
				controllerAs : 'user'
		})

		// form to create a new user
		// same view as EDIT PAGE
		.when('/users/create', {
			templateUrl : 'app/components/user/views/single.html',
				controller : 'userCreateController',
				controllerAs : 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl : 'app/components/user/views/single.html',
				controller : 'userEditController',
				controllerAs : 'user'
		})


		//paticipant events
	.when('/events', {
			templateUrl : 'app/components/participant/views/all.html',
				controller : 'eventController',
				controllerAs : 'tevent'
		})

	.when('/events/create', {
			templateUrl : 'app/components/participant/views/single.html',
				controller : 'eventCreateController',
				controllerAs : 'event'
		})

	.when('/myevents/:user_id', {
			templateUrl : 'app/components/participant/views/my.html',
				controller : 'MyeventController',
				controllerAs : 'event'
		})

	.when('/events/:event_id', {
			templateUrl : 'app/components/participant/views/single.html',
				controller : 'eventEditController',
				controllerAs : 'event'
		})

	.when('/event/:event_id', {
		templateUrl : 'app/components/participant/views/participantSingle.html',
			controller : 'eventEditController',
			controllerAs : 'event'
	})

	//participant profile
	.when('/profile/:participant_id', {
		templateUrl : 'app/components/participant/views/profile.html',
			controller : 'profileController',
			controllerAs: 'participant'
	})

	//switch events
	.when('/switch', {
		templateUrl : 'app/components/switch/views/all.html',
			controller : 'switchController',
			controllerAs : 'switch'
	})

	.when('/switch/create', {
		templateUrl : 'app/components/switch/views/single.html',
			controller : 'switchCreateController',
			controllerAs : 'switch'
	})

	.when('/switch/:switch_id', {
		templateUrl : 'app/components/switch/views/single.html',
			controller : 'switchEditController',
			controllerAs : 'switch'
	})



	//power events
	.when('/power', {
		templateUrl : 'app/components/power/views/all.html',
			controller : 'powerController',
			controllerAs : 'power'
	})

	.when('/power/create', {
		templateUrl : 'app/components/power/views/single.html',
			controller : 'powerCreateController',
			controllerAs : 'power'
	})

	.when('/power/:power_id', {
		templateUrl : 'app/components/power/views/single.html',
			controller : 'powerEditController',
			controllerAs : 'power'
	})
	

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});