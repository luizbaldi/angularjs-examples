chapter12.controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
	
	$scope.cache = $cacheFactory('mycache');

	// cache info
	$scope.info = $scope.cache.info();

	// insert elements in cache
	$scope.keys = ['ApiToken1', 'ApiToken2', 'ApiToken3'];

	$scope.cache.put($scope.keys[0], "token1-key");
	$scope.cache.put($scope.keys[1], "token2-key");
	$scope.cache.put($scope.keys[2], "token3-key");

	// recover data from cache
	$scope.elements = [];

	for(key in $scope.keys) {
		var element = {
			"key": $scope.keys[key],
			"value": $scope.cache.get($scope.keys[key])
		};

		$scope.elements.push(element);
	};
}]);