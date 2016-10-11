app.service('$TwitterTokenServiceTwo', ['$twitterApiToken', 'TwitterTokenService', 
	function TwitterTokenService(token) {
		this.getToken = function() {
			return token;
		};
	}
]);