chapter6.directive('dirTrueScope', function() {
	return {
		scope: true,
		link: function(scope) {
			scope.count = 30;
		},
		template: 'Directive count: {{ count }}'
	};
});