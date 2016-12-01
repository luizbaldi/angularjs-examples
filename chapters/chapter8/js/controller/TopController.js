chapter8.controller('TopController', ['$scope', function($scope) {
	$scope.count = 0;

	$scope.$on('myEvent', function() {
		$scope.count++;
	});
	
}]);