chapter12.factory('TimeService', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {
	var service = {
		weatherIsSunny : function() {
			// Creating promise through $q.defer();
			var defer = $q.defer();

			// Simulating assync operation
			$timeout(function() {
				if ($rootScope.weather == 'rainy') {
					defer.reject("Rainny weather");
				} else if ($rootScope.weather == 'sunny') {
					defer.resolve('Sunny weather');
				}
			}, 2000);

			// Returns the promise
			return defer.promise;
		}
	};

	return service;
}])