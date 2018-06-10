cl = comsole.log;

// 1.二进制和八进制表示法
0b111110111 === 503; // true
0o767 === 503; // true

// 严格模式报错
(function() {
    'use strict';
    0o11 === 011;
}());


// 2.Number.isFinite()、Number.isNaN()
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true'/0) // true
Number.isNaN('true'/'true') // true


// 3.Number.parseInt()、Number.parseFloat()
// 行为一模一样，移植


// 4.Nubmer.isInteger();
// 是否整形


// 5.Number.EPSILON
// 最小值


// 6.Number.isSafeInteger
// 安全整数
