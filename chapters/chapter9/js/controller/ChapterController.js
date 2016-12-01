chapter9.controller('ChapterController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.name = 'ChapterController';

	$scope.params = $routeParams;
}]);