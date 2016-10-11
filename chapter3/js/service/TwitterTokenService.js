app.factory('$TwitterTokenService', ['$twitterApiToken', 
	function($twitterApiToken) {
		var f = {};
		f.getToken = function() {
			return $twitterApiToken;
		};
		return f;
	}
]);