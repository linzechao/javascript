define(function(require, exports, module) {
	/**
	 * 获取Location，所有参数，返回json对象
	 * @author super
	 * @date 2015-07-12 13:16
	 * @method getJson
	 * @retruns [json]
	 */
	exports.getJson = function() {
		var json = {},
			sSea = location.search.substr(1),
			aSea = sSea.split('&'),
			i = 0,
			len = aSea.length;
		
		for (; i < len; i++) {
			var aRule = aSea[i].split('=');
			json[aRule[0]] = aRule[1];
		}

		return json;
	};

	/**
	 * 获取Location某个key的值
	 * @author super
	 * @date 2015-07-12 13:18
	 * @method getValue
	 * @param [string] key
	 * @retruns [string]
	 */
	exports.getValue = function(key) {
		return this.getJson()[key];
	};

	/**
	 * 获取Location的锚点
	 * @author super
 	 * @date 2015-07-12 13:30
 	 * @method getHash
 	 * @retruns [string]
	 */
	exports.getHash = function() {
		return location.hash.substr(1);
	};

	/**
	 * 设置Location的锚点
	 * @author super
 	 * @date 2015-07-12 13:32
 	 * @method setHash
 	 * @param [string] hash
 	 * @retruns [void]
	 */
	exports.setHash = function(hash) {
		// 使用以下方法，是提防：
		// 位置（浏览器滚动）不同，锚点相同
		// 而导致定位失效
		location.hash = hash + new Date().valueOf();
		location.hash = hash;
	};
});
