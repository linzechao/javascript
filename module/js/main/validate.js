define(function (require, exports, module) {
	var $ = require('jquery');
	
	require('validate')($);

	var $form = $('form'),
		$alert = $('#alert');

	jQuery.extend(jQuery.validator.messages, { 
		required: "必填字段", 
		remote: "请修正该字段", 
		email: "请输入正确格式的电子邮件", 
		url: "请输入合法的网址", 
		date: "请输入合法的日期", 
		dateISO: "请输入合法的日期 (ISO).", 
		number: "请输入合法的数字", 
		digits: "只能输入整数", 
		creditcard: "请输入合法的信用卡号", 
		equalTo: "请再次输入相同的值", 
		accept: "请输入拥有合法后缀名的字符串", 
		maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"), 
		minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"), 
		rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"), 
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"), 
		max: jQuery.validator.format("请输入一个最大为 {0} 的值"), 
		min: jQuery.validator.format("请输入一个最小为 {0} 的值")
	});

	// 不需要使用submit
	$form.on('submit', function() {
		// $alert.find('ol').html('');
		// return false;
	});



	// 默认都是true
	$form.validate({
		// 测试，不提交表单
		debug: true,

		// 输入时不验证
		// onkeyup: true, // 报错
		onkeyup: function(element) {$(element).valid();},

		// 点击时是否验证
		onclick: false,

		// 未通过验证的第一个表单获得焦点
		focusInvalid: true,

		// 获取焦点时验证
		onfocusout: false,

		// 使用什么标签提示(默认label)
		errorElement: 'li',

		// 错误提示的外包标签
		// wrapper: 'li',

		// 错误信息统一放置地方
		// errorLabelContainer: '#alert',

		// 规则
		rules: {
			user: {
				required: true
			},
			pass: {
				required: true
			},
			again: {
				required: true,
				equalTo: '#pass'
			}
		},

		// 错误提示
		messages: {
			user: {
				required: '用户名不能为空！'
			},
			pass: {
				required: '密码不能为空！'
			},
			again: {
				required: '确认密码不能为空！',
				equalTo: '两次输入密码不一致！'
			}
		},

		// 验证不通过
		errorPlacement: function(error, element) {
			// console.log(error, element);
			// $alert.fadeIn().find('ol').append(error[0].outerHTML);
			alertBox({tag: error[0].outerHTML});
		},

		// 验证通过
		submitHandler: function() {
			// console.log($form.serialize());
			return false;
		}
	});

	function alertBox(option) {
		var $alertBox = $('#alert'), timeout;

		if (!$alertBox.length) {
			var sAlert = '<div class="container in fade alert alert-warning alert-dismissible" id="alert" role="alert">'
	  				+ '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
	  				+ '<strong>温馨提示：</strong>'
	  				+ '<ol></ol></div>';

			$('body').append(sAlert);
			$alertBox = $('#alert');
		}

		$alertBox.fadeIn().find('ol').append(option.tag);

		clearTimeout(timeout);
		timeout = setTimeout(function() {
			$alertBox.alert('close');
			clearTimeout(timeout);
		}, option.time || 3000);
	}
});
