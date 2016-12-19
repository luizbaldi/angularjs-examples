chapter12.controller('PromiseChainController', ['$scope', '$q', function($scope, $q) {

	// Result - output
	$scope.hobbies = [];

	// Defer object
	var defer = $q.defer();

	// Chain
	defer.promise
		.then(function(hobby) {
			$scope.hobbies.push(hobby);
			return "Watch movie";
		})
		.then(function(hobby) {
			$scope.hobbies.push(hobby);
			return "Study AngularJS";
		})
		.then(function(hobby) {
			$scope.hobbies.push(hobby);
		});

	// Start chain from first defer.resolve();
	defer.resolve('Hang out with dudes');
}]);