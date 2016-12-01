chapter9.controller('BookController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.name = 'BookController';

	$scope.params = $routeParams;
}]);