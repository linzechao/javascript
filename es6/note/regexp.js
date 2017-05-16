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

// i修饰符
/[a-z]/i.test('\u212A'); // false
/[a-z]/iu.test('\u212A'); // true


// 4.y修饰符“粘连修饰符”
// 从位置开始，如果查找不到，则后续不再查找
// 返回最后一次匹配到的模式
// g会忽略非法字符，而y不会


// 5.sticky属性
var r = /hello\d/y;
r.sticky; // true


// 6.flags属性
/abc/ig.source; // abc
/abc/ig.flags; // ig


// 7.RegExp.escape();


// 8.s修饰符（dotAll模式）
/foo.bar/s.test('foo\nbar'); // true


// 9.后行断言
// 









