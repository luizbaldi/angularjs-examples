chapter3.controller('TwitterControllerTwo', ['$scope', '$TwitterTokenServiceTwo',
	function($scope, $TwitterTokenServiceTwo) {
		$scope.token = $TwitterTokenServiceTwo.getToken();
	}
]);