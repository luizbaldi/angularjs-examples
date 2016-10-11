app.controller('TwitterControllerTwo', ['$scope', '$TwitterTokenServiceTwo',
	function($scope, $TwitterTokenServiceTwo) {
		$scope.token = $TwitterTokenServiceTwo.getToken();
	}
]);