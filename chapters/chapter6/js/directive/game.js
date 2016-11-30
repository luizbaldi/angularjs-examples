chapter6.directive('game', function() {
	return {
		scope: {
			teams: '@' //creating text bind
		},
		controller: 'GameDirectiveController',
		template: '<p>Match: [{{ teams }}] </p>'+
		'<b>Game score: </b> {{ scores }}'
	};
});