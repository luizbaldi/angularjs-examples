chapter9.controller('MainPageController', ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams) {
	$scope.$route = $route;

	$scope.$routeParams = $routeParams;
}]);