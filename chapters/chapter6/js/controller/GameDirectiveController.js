chapter6.controller('GameDirectiveController', ['$scope', function($scope) {
	$scope.scores = 0;
	
	this.increment = function() {
		$scope.scores++;
	};
}]);