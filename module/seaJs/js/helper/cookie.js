define(function(require, exports, module) {
	// 添加cookie
	exports.setCookie = function(key, val, day) {
		var day = day || 1, // 默认设置为1天
			date = new Date();
		date.setDate(date.getDate() + day);
		document.cookie = key + '=' + val + '; expires=' + date;
	};

	// 删除cookie
	exports.removeCookie = function(key) {
		this.setCookie(key, '', -1);
	};

	// 获取所有cookie, 返回一个json对象
	exports.getCookies = function() {
		var aCookie = document.cookie.split('; '),
			jCookie = {};
		for (var i = 0, len = aCookie.length; i < len; i++) {
			var sCookie = aCookie[i].split('=');
			jCookie[sCookie[0]] = sCookie[1];
		}
		return jCookie;
	};

	// 获取单个cookie
	exports.getCookie = function(key) {
		return this.getCookies[key];
	};
});