chapter7.directive('bootstrap', ['$compile', '$rootScope', function($compile, $rootScope) {
	return function(scope, element, attrs) {
		// Hypothetical scope configuration
		$rootScope.total = 0;
		
		$rootScope.increment = function() {
			$rootScope.total++;
		};

		// Simulating template found by AngularJS, based on ng-app
		var template = angular.element('<p><b>Total</b>: {{total}}</p><button ng-click="increment()">Increment total</button>');
		
		// Compile phase
		var linkFn = $compile(template);

		// Linking phase
		var liveView = linkFn($rootScope);

		// Finally include 'Live View' on DOM
		element.append(liveView);		
	};
}]);