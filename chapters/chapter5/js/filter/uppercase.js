chapter5.filter('uppercase', function() {
	return function(input) {
		return input == 'undefined' || input == null ? input : input.toUpperCase();
	}
});