cl = console.log;

// 1.数组的解构赋值
let [a, b, c] = [1, 2, 3];
// document.writeln(a, b, c);

let [x = y, y = 1] = [2];
// document.writeln(x, y);

// 2.对象的解构赋值
// let {name:n, age:ag} = {name: 'Super', age: 24};
// document.writeln(n, ag);

let people = {name: 'Chao', age: '18'};
let {name: n, age: ag} = people;
// document.writeln(n, ag);

let p;
// 一定要带上括弧号
({p} = {p: 'people'});
// console.log(p);


// 3.字符串的解构赋值
const [o, t, s, f, i] = 'SUPER';
// console.log(o, t, s, f, i);


// 4.数值和布尔值的解构赋值
let {toString: ss} = 123;
// console.log(ss === Number.prototype.toString);
// console.log(ss);



// 5.函数参数的解构赋值
function add([aa, bb]) {
    return aa + bb;
}
// console.log(add([1, 2]));
// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));


// 以下为新拓展
// 1.Array.from()
// 将对象转换成数组
// 必须带length数值
/*
cl(Array.from({0: 'Super', 1: '18', length: 2}));
cl(Array.from([2, 4, 6, 8]));
cl(Array.from('Super'));
cl(Array.from([...[1, 3, 5, 7]]));
// 第二参数类似map
cl(Array.from([2.1, 4.3, 6.5, 8.7], (x) => x ** x));
*/


// 2.Array.of()
// 将参数转换成数组
/*
cl(Array.of(1, 2, 3, 4));
cl(Array.of(...[1, 2, 3, 4]));
cl(Array.of(...[{}, undefined, NaN, null]));
*/


// 3.copyWhithin()
// 复制数组


// 4.find()、findIndex()
// find查找到第一个即可返回
/*
cl([1, 2, -5, -1, 10].find((n) => n < 0));
cl([1, 2, -5, -1, 10].filter((n) => n < 0));


// 返回下标
cl([1, 2, -5, -1, 10].findIndex((n) => n < 0));


// 5.fill()
// 补充一个数组
cl([0, 6, 8, 4].fill(2, 2, 4));
*/


// 6.entries()、keys()、values()实例
for (let key of ['a', 'b', 'c', 'x', 'y', 'z'].keys()) {
    // cl(key);
}

/*
 * 报错
for (let value of ['a', 'b', 'c', 'x', 'y', 'z'].values()) {
    cl(value);
}
*/

for (let [key, value] of ['a', 'b', 'c', 'x', 'y', 'z'].entries()) {
    // cl(key, value);
}


// 7.includes()
// 是否包含参数和值
[1, 2, 3, 5].includes(4);


// 8.数组的空位
cl(0 in Array(3));
