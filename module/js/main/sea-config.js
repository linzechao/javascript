// sea.js配置
seajs.config({
	base: './js/main/',

	alias: {
		// test
		compatible: '../test/compatible.js',

		// helper
		jquery: '../helper/jquery.min.js',
		validate: '../helper/jquery.validate.js',
		mustache: '../helper/mustache.min.js',
		moment: '../helper/moment.min.js',
		bootstrap: '../helper/bootstrap.min.js',

		// window
		cookie: '../window/cookie.js',
		location: '../window/location.js',

		// base
		date: '../base/date.js'
	}
});
