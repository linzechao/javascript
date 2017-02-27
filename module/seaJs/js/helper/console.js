define(function(require, exports, module) {
	var c = console;
	module.exports = {
		log: function(int) {
			c.log(int);
		},

		info: function(str) {
			c.info(str);
		},

		error: function(obj) {
			c.error(obj);
		},

		dir: function(arr) {
			c.dir(arr);
		}
	};
});