require.config({
	paths: {
		jquery: 'utils/jquery',
		mustache: 'utils/mustache',
		console: 'helper/console',
		cookie: 'helper/cookie'
	}
});

require(['jquery', 'mustache', 'console', 'cookie'], function($, Mustache, Console, Cookie) {
	$('body').css('background', '#eee');
	Console.info(Mustache);
	Console.info(Cookie);
});
