chapter4.controller('ClassController', ['$scope', function($scope) {
	$scope.isError = false;
	$scope.isWarning = false;

	$scope.showError = function() {
		$scope.isError = true;
		$scope.isWarning = false;
	};

	$scope.showWarning = function() {
		$scope.isError = false;
		$scope.isWarning = true;
	};
}]);