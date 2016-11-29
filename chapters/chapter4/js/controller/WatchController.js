chapter4.controller('WatchController', ['$scope', function($scope) {
	$scope.total = 0;

	$scope.listenerMessage = '';

	function totalChanged(newValue, oldValue) {
		$scope.listenerMessage = 'Old value: ' + oldValue + ', New Value: ' + newValue;
	}

	//Watch changes for $scope.total
	$scope.$watch('total', totalChanged);
	
	$scope.increment = function() {
		$scope.total++;
	};
}]);