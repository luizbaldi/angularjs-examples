app.controller('TwitterController', ['$scope', '$TwitterTokenService',
	function($scope, $TwitterTokenService) {
		$scope.token = $TwitterTokenService.getToken();
	}
]);