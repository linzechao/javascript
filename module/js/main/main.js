define(function(require, exports, module) {
	/*var loca = require('location');
	console.log(loca.getJson());
	console.log(loca.getValue('g'));
	console.log(loca.getHash());
	loca.setHash('abck');*/

	/*var cook = require('cookie');
	console.info(cook.getJson());
	console.info(cook.getCookie('you'));
	console.info(cook.setCookie('you', 'go, go, go!', 20));
	console.info(cook.removeCookie('you'));*/

	/*var cons = require('console');
	cons.clear();
	cons.time('time');

	cons.debug('debug....');
	cons.info('info....');
	cons.warn('warn....');
	cons.error('error....');
	count();
	cons.assert(false, 'assert is true');
	cons.log('<html></html>');
	count();
	cons.dirxml('<html><body></body></html>');

	(function(c) {
		c.log('----');
		cons.trace();

		count();
	}(cons));

	cons.group('group');
	cons.groupEnd('groupEnd');
	cons.groupCollapsed('groupCollapsed');
	cons.groupEnd('groupEnd');
	count();
	cons.group('group');
	cons.groupEnd('groupEnd');
	cons.groupCollapsed('groupCollapsed');
	cons.groupEnd('groupEnd');

	cons.timeEnd('time');

	cons.profile('profile');
	cons.profileEnd('profile');

	function count() {
		cons.count('function count');
	}

	cons.table('123');
	console.table({a: 'a', b: 'b'});
	console.table([1, 2, 3, 4]);*/

	// var date = require('./js/base/date');
	// console.info(date.getDate(new Date()));


	var $ = require('jquery');
	require('bootstrap')($); // 使用bootstrap.js
	
	// $('body').css('background-color', '#fdfdfd');

	/*var $ = require('jquery');
	var mustache = require('mustache');
	var date = require('date');
	// console.log(mustache);

	// js时间戳单位为毫秒
	var moment = require('moment');
	console.log('server: ' + moment.unix(new Date().valueOf() / 1000).format('YYYY-MM-DD HH:mm:ss'));
	console.log('js: ' + date.getDate(new Date()));*/
	
	var comp = require('compatible');
	comp.sayHello();
});
