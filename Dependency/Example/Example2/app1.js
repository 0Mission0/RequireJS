//What if I want to alert a VAR defined in other JS document

(function() {
	requirejs(['jquery.min'], function($) {
		$body = $("body");
		console.log($body);
	});
}).call(this);