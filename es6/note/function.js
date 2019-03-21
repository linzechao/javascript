cl = console.log;

// 1.参数默认值
function log(x, y = 'World') {
    // cl(x, y);
}
log('Hello');
log('Hello', 'Man');
log('Hello', '');
log('Hello', null);
log('Hello', undefined);


// 2.参数默认值的位置
// 建议放置在最后


// 3.length属性
// 没有默认值的参数个数
cl((function(){}).length);
cl((function(a, b){}).length);
cl((function(a, b = 4){}).length);
cl((function(a = 2, b = 4){}).length);


// 4.作用域


























