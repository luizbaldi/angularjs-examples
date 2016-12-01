var chapter9 = angular.module('chapter9', ['ngRoute']);

chapter9.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	// Hashbang prefix config
	$locationProvider.hashPrefix('!');

	// Route config
	$routeProvider
		.when('/book/:id', {
			templateUrl: 'views/book.html',
			controller: 'BookController'
		})
		.when('/book/:bookId/chapter/:chapterId', {
			templateUrl: 'views/chapter.html',
			controller: 'ChapterController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);