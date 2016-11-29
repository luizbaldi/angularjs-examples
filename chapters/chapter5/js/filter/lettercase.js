chapter5.filter('lettercase', function() {
	return function(input, mode) {
		return mode == 'upper' ? input.toUpperCase() : input.toLowerCase();
	};
});