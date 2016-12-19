chapter12.controller('TimeSimulatorController', ['$rootScope', 'TimeService', function($rootScope, TimeService) {
	
	$rootScope.updateWeather = function(weather) {
		$rootScope.weather = weather;
		$rootScope.checkWeather();
	};

	$rootScope.checkWeather = function() {
		$rootScope.message = "Checking weather...";
		TimeService.weatherIsSunny()
			.then(
				function(message) {
					$rootScope.goFishing(message);
				},
				function(error) {
					$rootScope.stayHome(error);
				}
			);
	};

	$rootScope.goFishing = function(message) {
		$rootScope.message = " - " + message + " - " + "It's a great weather! Let's go fishing!";
	};

	$rootScope.stayHome = function(message) {
		$rootScope.message = " - " + message + " - " + "It's a rainny day. Let's just stay home.";	
	};
}])