// 所有模块都通过“define”来定义
define(function(require, exports, module) {
	// 通过“require”引入依赖
	/*var $ = require('jquery');
	var mustache = require('mustache');
	console.info($);
	console.info(mustache);*/


	// 使用JSON插件
	/*var json = require('../json/test.json#');
	console.info(json);*/


	// 引入自定义模块
	var csol = require('console');
	/*csol.log('log...');
	csol.info('info...');
	csol.error('error...');
	csol.dir('dir...');*/
	// 引入cookie模块
	var coki = require('cookie');
	coki.setCookie('name', 'super');
	csol.info(coki.getCookies());

	// 异步加载
	require.async('console', function(csol) {
		csol.info('csol async.');
	});

	require.async('cookie', function(coki) {
		/*console.log(coki.getCookies());*/
	});

	// 返回路径
	csol.log(require.resolve('jquery'));

	
	// 通过“exports”对外提供接口
	/*exports.testExports = function() {
		console.info('test exports.');
		// console.info(module.uri);
	};*/


	// 通过“module.exports”提供整个接口(会替换掉exports对外提供的所有接口)
	module.exports = {
		name: 'super',
		age: 24,
		doSomething: function() {
			console.info(this.name + ': ' + this.age);
		}
	};


	// 通过return可代替module.exports
	/*return {
		name: 'return',
		content: 'object'
	}*/
});