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
console.log(o, t, s, f, i);


// 4.数值和布尔值的解构赋值
let {toString: ss} = 123;
console.log(ss === Number.prototype.toString);
console.log(ss);



// 5.函数参数的解构赋值
function add([aa, bb]) {
    return aa + bb;
}
console.log(add([1, 2]));
console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

