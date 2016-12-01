chapter8.controller('BottomController', ['$scope', function($scope) {
	$scope.count = 0;

	$scope.$on('myEvent', function() {
		$scope.count++;
	});
}]);