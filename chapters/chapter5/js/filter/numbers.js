chapter5.filter('numbers', function() {
	return function(label, n1, n2, n3, n4) {
		return '[' + label + '] ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4;
	};
});