angular.module('powerController', ['powerService'])

	.controller('powerController', function(Power) {
		var vm = this;

		Power.all()
			.success(function(data) {
				vm.powers = data;
			});


		vm.deletePower = function(id) {
			Power.delete(id)
				.success(function(data) {
					Power.all()
						.success(function(data) {
							vm.powers = data;
						});
				});
		};
	})



	.controller('powerCreateController', function(Power) {
		var vm = this;

		vm.type = 'create';

		vm.SavePower = function() {
			vm.message = '';

			Power.create(vm.powerData)
				.success(function(data) {
					vm.powerData = {};
					vm.message = data.message;
				});
		};
	})

	.controller('powerEditController', function($routeParams, Power) {
		var vm = this;

		vm.type = 'edit';

		Power.get($routeParams.power_id)
			.success(function(data) {
				vm.powerData = data;
			});

		vm.SavePower = function() {
			vm.message = '';

			Power.update($routeParams.power_id, vm.powerData)
				.success(function(data) {
					vm.powerData = {};

					vm.message = data.message;
				});
		};
	})






























