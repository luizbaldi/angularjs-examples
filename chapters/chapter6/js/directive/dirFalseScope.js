chapter6.directive('dirFalseScope', function() {
	return {
		scope: false,
		link: function(scope) {
			// Directive scope
			scope.count = 30;
		},
		template: 'Directive count: {{ count }}'
	}
});