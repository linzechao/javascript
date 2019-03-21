/*
 * 只供学习，不建议引用
 */
define(function(require, exports, module) {
	/**
	 * 打印日志
	 * @author super
	 * @date 2015-07-12 18:18
	 * @method log
	 * @param [all] log
	 * @retruns [void]
	 */
	exports.log = function(log) {
		console.log(log);
	};

	/**
	 * 打印BUG
	 * @author super
	 * @date 2015-07-12 18:20
	 * @method debug
	 * @param [all] debug
	 * @retruns [void]
	 */
	exports.debug = function(debug) {
		console.debug(debug);
	};

	/**
	 * 打印信息
	 * @author super
	 * @date 2015-07-12 18:23
	 * @method info
	 * @param [all] info
	 * @retruns [void]
	 */
	exports.info = function(info) {
		console.info(info);
	};

	/**
	 * 打印警告
	 * @author super
	 * @date 2015-07-12 18:24
	 * @method warn
	 * @param [all] warn
	 * @retruns [void]
	 */
	exports.warn = function(warn) {
		console.warn(warn);
	};

	/**
	 * 打印错误
	 * @author super
	 * @date 2015-07-12 18:25
	 * @method error
	 * @param [all] error
	 * @retruns [void]
	 */
	exports.error = function(error) {
		console.error(error);
	};

	/**
	 * 断言打印，等同于error
	 * @author super
	 * @date 2015-07-12 21:21
	 * @method assert
	 * @param [boolean] bool
	 * @param [all] assert
	 * @retruns [void]
	 */
	exports.assert = function(bool, assert) {
		// 当bool为true时，false才会被输出
		console.assert(bool, assert);
	};

	/**
	 * 清除签名由console输出的内容
	 * @author super
	 * @date 2015-07-12 21:43
	 * @method clear
	 * @retruns [void]
	 */
	exports.clear = function() {
		console.clear();
	};

	/**
	 * 打印html文本，等同于log
	 * @author super
	 * @date 2015-07-12 21:45
	 * @method dirxml
	 * @param [all] dirxml
	 * @retruns [void]
	 */
	exports.dirxml = function(dirxml) {
		console.dirxml(dirxml);
	};

	/**
	 * 查看当前函数的调用栈堆信息，等同于error, assert, 但不是错误的红色样式
	 * @author super
	 * @date 2015-07-12 21:56
	 * @method trace
	 * @retruns [void]
	 */
	exports.trace = function() {
		console.trace();
	};

	/**
	 * 将后面由console输出的内容折叠起来
	 * @author super
	 * @date 2015-07-12 21:56
	 * @method group
	 * @param [all] group
	 * @retruns [void]
	 */
	exports.group = function(group) {
		console.group(group);
	};

	/**
	 * 将后面由console输出的内容折叠起来，
	 * 但是不管存在哪个group中，第一级(最上面的组合)的groupCollapsed的上级至最上级都是被打开的
	 * @author super
	 * @date 2015-07-12 22:05
	 * @method groupCollapsed
	 * @param [all] groupCollapsed
	 * @retruns [void]
	 */
	exports.groupCollapsed = function(groupCollapsed) {
		console.groupCollapsed(groupCollapsed);
	};

	/**
	 * 结束上面一个分组
	 * @author super
	 * @date 2015-07-12 22:10
	 * @method groupEnd
	 * @param [all] groupEnd
	 * @retruns [void]
	 */
	exports.groupEnd = function(groupEnd) {
		console.groupEnd(groupEnd);
	};

	/**
	 * 启动一个定时器，参数要与timeEnd参数一致
	 * @author super
	 * @date 2015-07-12 22:18
	 * @method time
	 * @param [all] time
	 * @retruns [void]
	 */
	exports.time = function(time) {
		console.time(time);
	};

	/**
	 * 结束一个定时器，参数要与time参数一致
	 * @author super
	 * @date 2015-07-12 22:20
	 * @method timeEnd
	 * @param [all] timeEnd
	 * @retruns [void]
	 */
	exports.timeEnd = function(timeEnd) {
		console.timeEnd(timeEnd);
	};

	/**
	 * 函数分析开始（分析内容不全）
	 * @author super
	 * @date 2015-07-12 22:28
	 * @method profile
	 * @param [all] profile
	 * @retruns [void]
	 */
	exports.profile = function(profile) {
		console.profile(profile);
	};

	/**
	 * 函数分析结束（分析内容不全）
	 * @author super
	 * @date 2015-07-12 22:28
	 * @method profileEnd
	 * @param [all] profileEnd
	 * @retruns [void]
	 */
	exports.profileEnd = function(profileEnd) {
		console.profileEnd(profileEnd);
	};

	/**
	 * 记录该函数被执行的次数
	 * @author super
	 * @date 2015-07-12 22:32
	 * @method count
	 * @param [all] count
	 * @retruns [void]
	 */
	exports.count = function(count) {
		console.count(count);
	};

	/**
	 * 如果参数为object、array则，输入为折叠式的内容
	 * @author super
	 * @date 2015-07-12 22:34
	 * @method table
	 * @param [all] table
	 * @retruns [void]
	 */
	exports.table = function(table) {
		console.table(table);
	};
});