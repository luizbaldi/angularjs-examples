chapter6.directive('isolatedScopeBinding', function() {
	return {
		scope: {
			count: "=",
			countAlertHandler: "&",
			label: "@"
		},
		link: function(scope, element, attributes) {
			var button = angular.element('<button>Alert parent Count</button>');
			button.on('click', function() {
				scope.countAlertHandler({label: scope.label, parentControllerCount: scope.count});
			});
			element.append(button);
		}
	};
});