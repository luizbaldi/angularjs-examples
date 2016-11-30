chapter6.directive('score', function() {
	return {
		require: 'game', // get gameController (GameDirectiveController)
		link: function(scope, element, attributes, GameDirectiveController) {
			var button = angular.element('<p><button>Rise game scores</button></p>');
			button.on('click', function() {
				scope.$apply(function() {
					GameDirectiveController.increment();
				});
			});
			element.parent().append(button);
		}
	};
});