chapter8.controller('MiddleController', ['$scope', function($scope) {
	$scope.count = 0;

	$scope.$on('myEvent', function() {
		$scope.count++;
	});
}]);