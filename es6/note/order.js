// 1.局部作用域
/*
for (let i = 0; i < 10; i++) {
    document.writeln(i);
}
// 常量
const PATH = 'waqudao';
console.log(PATH);
// 以下再赋值则报错
// PATH = 'wqd';
*/

// 2.解决闭包问题
var print = [];
/*
for (var i = 0; i < 10; i++) {
    // document.writeln();
    // print(i);
    print.push(function() {
        console.log(i);
    });
}
print[6](); // 10
*/
for (let i = 0; i < 10; i++) {
    print.push(function() {
        console.log(i);
    });
}
// print[6](); // 6


// 3.没有变量提升
// console.log(bb); // 报错
let bb = 'body boy';


// 4.死区(暂时性死区)
// typeof aa; // 报错
let aa = 'a apple';
// 隐蔽性强
function bar(x = y, y = 2) {
    return [x, y];
}
// console.log(bar()); 报错
function bar(x = 2, y = x) {
    return [x, y];
}
// console.log(bar());


// 5.const与let一样，具有局部作用域
// const no; // 报错
