cl = console.log;

// 1.RegExp构造方法
// es5报错，而es6则不会
var regex = new RegExp(/xyz/i, 'i');


// 2.字符串的正则方法
// match、replace、search、split
// 调用的全是正则的构造方法


// 3.u修饰符
// 加强对Unicode的支持
cl(/\uD83D/u.test('\uD83D\uDC2A'));
cl(/\uD83D/.test('\uD83D\uDC2A'));

// .字符
cl(/^.$/.test('𠮷')); // false
cl(/^.$/u.test('𠮷')); // true

/\u{66}/.test('f');
/\u{66}/u.test('f');


















