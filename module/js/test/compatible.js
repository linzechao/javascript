;(function (name, definition) {
	var hasDefine = typeof define === 'function',
		hasExports = typeof module !== 'undefined' && module.exports;

	if (hasDefine) {
		// AMD或CMD环境
		define(definition);

	} else if (hasExports) {
		// Node模块
		module.exports = definition();

	} else {
		// 加载到window对象中
		this[name] = definition();
	}
	
})('comp', function() {
	var comp = function () {};
	comp.sayHello = function () {
		console.log('Hello, I\'m Compatible.');
	};
	return comp;
});
