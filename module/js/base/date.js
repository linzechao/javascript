define(function(require, exports, module) {
	/**
	 * 格式化时间，统一格式yyyy-mm-dd hh-mm-ss
	 * @author super
	 * @date 2015-07-12 22:50
	 * @method getDate
	 * @param [date] date
	 * @retruns [string]
	 */
	exports.getDate = function(date) {
		return date.getFullYear() + '-' 
			+ (date.getMonth() + 1) + '-'
			+ date.getDate() + ' '
			+ date.getHours() + ':'
			+ date.getMinutes() + ':'
			+ date.getSeconds();
	}
});