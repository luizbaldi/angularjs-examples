chapter6.controller('ParentController', ['$scope', function($scope) {
	// Here's parent scope
	$scope.count = 5;

	$scope.alertCount = function(label, parentControllerCount) {
		window.alert(label + ' ' + parentControllerCount);
	};

	$scope.incrementCount = function() {
		$scope.count++;
	};
}]);