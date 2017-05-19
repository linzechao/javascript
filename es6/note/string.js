cl = console.log;
// 1.Unicode表示法
/*
console.log('\u0061');
console.log('"\uD842\uDFB7"');
console.log('\u{20BB7}');
console.log('\u{42}\u{42}');
'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true
*/

// 2.codePointAt()
/*
var a = '𠮷s',
    b = 'Super';
cl(a.codePointAt(0).toString(16));
cl(a.codePointAt(1));
cl(a.codePointAt(2));
cl(b.codePointAt(0));
cl(b.codePointAt(1));
cl(b.codePointAt(2));
cl(b.codePointAt(3));
cl(b.codePointAt(4));
*/

// 3.String.fromCodePoint()
// ES5
// cl(String.fromCharCode(0x20BB7));
// ES6
// cl(String.fromCodePoint(0x20BB7));



// 4.字符串的遍历器接口
// for (let single of 'Super') {
for (let single of String.fromCodePoint(0x20BB7)) {
    // cl(single);
}


// 5.at()
// 不支持？
/*
cl('abc'.at(0));
cl('𠮷'.at(0));
*/


// 6.normalize()
// 特殊字符的处理
// 不能处理中文


// 7.includes()、startsWith()、endsWith()
/*
var name = 'Super Chao!';
// 第二个参数为从哪里开始
cl(name.startsWith('r C', 4));
cl(name.includes('pe'));
// 第二个参数为到哪里结束
cl(name.endsWith('ao!', name.length));
*/


// 8.repeat()
// 将字符串重复几次
// console.log('x'.repeat(8));


// 9.padStart()、padEnd()
// 补位
// 报错
/*
cl('★'.padEnd(5, '☆'));
cl('☆'.padStart(5, '★'));
*/


// 10.模板字符串
var name = 'Super';
cl(`
    Hello! \n
    My Name is ${name}! \n
    Surprise! \n
    I'm Come Back!
`.trim());


// 11.模板编译
var data = ['super', 'chao', 'lin', '44'],
    template = `
        <ul>
            <% for(var i = 0; i < data.length; i++) { %>
                <li>
                    <%= data[i] %>
                </li>
            <% } %>
        </ul>
    `;
cl(template);


// 12.标签模板
// alert`123`;
// cl`456`;


// 13.String.raw()
// 转义
cl(String.raw`Hi\n${data}`);


// 14.模板字符串的限制












