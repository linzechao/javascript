define(function (require, exports, module) {
	/**
	 * 获取所有Cookie，返回json对象
	 * @author super
	 * @date 2015-07-12 13:43
	 * @method getJson
	 * @retruns [json]
	 */
	exports.getJson = function() {
		var json = {},
			sCook = document.cookie,
			aCook = sCook.split('; '),
			i = 0,
			len = aCook.length;
		
		for (; i < len; i++) {
			var aRule = aCook[i].split('=');
			json[aRule[0]] = aRule[1];
		}

		return json;
	};

	/**
	 * 获取Cookie某个key的值
	 * @author super
	 * @date 2015-07-12 13:46
	 * @method getCookie
	 * @param [string] key
	 * @retruns [string]
	 */
	exports.getCookie = function(key) {
		return this.getJson()[key];
	};

	/**
	 * 设置Cookie
	 * @author super
 	 * @date 2015-07-12 13:48
 	 * @method setCookie
 	 * @param [string] key
 	 * @param [string] value
 	 * @param [number] expires
 	 * @retruns [void]
	 */
	exports.setCookie = function(key, value, expires) {
		if (!expires) {
		    expires = 1;
		}
		var date = new Date();
		date.setDate(date.getDate() + expires);
		document.cookie = key + '=' + value + '; expires=' + date;
	};

	/**
	 * 删除Cookie
	 * @author super
 	 * @date 2015-07-12 13:55
 	 * @method removeCookie
 	 * @param [string] key
 	 * @param [string] value
 	 * @param [number] expires
 	 * @retruns [void]
	 */
	exports.removeCookie = function(key) {
	    this.setCookie(key, 0, -1);
	};
});