angular.module('switchController', ['switchService'])

	.controller('switchController', function(Switch) {
		var vm = this;

		Switch.all()
			.success(function(data) {
				vm.switches = data;
			});


		
	})



	.controller('switchCreateController', function(Switch) {
		var vm = this;

		vm.type = 'create';

		vm.saveSwitch = function() {
			vm.message = '';

			Switch.create(vm.switchData)
				.success(function(data) {
					vm.switchData = {};
					vm.message = data.message;
				});
		};
	})

	.controller('switchEditController', function($routeParams, $location, Switch) {
		var vm = this;

		vm.type = 'edit';

		Switch.get($routeParams.switch_id)
			.success(function(data) {
				vm.switchData = data;
			});

		vm.saveSwitch = function() {
			vm.message = '';

			Switch.update($routeParams.switch_id, vm.switchData)
				.success(function(data) {
					vm.switchData = {};

					vm.message = data.message;
				});
		};

		vm.deleteSwitch = function(id) {
			Switch.delete(id)
				.success(function(data) {
					$location.path('/switch/');
				});
		};
	})






























