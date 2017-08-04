#### String
1. at() - 提案
2. padStart()、padEnd() - ES7


#### RegExp
1. escape() - ES7


#### Array



# 字符串(String)
```es6
// 重复字符串
'-'.repeat(10) // "----------"

// 补全字符串(es7)
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'08-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-08-12"

// 字符串模板
// 反引号(`)，配合变量(${})语法

// 模板编译
let tmp = `
    <ul>
        <% for(let i = 0; i < 10; i++) { %>
            <li>
                <%= i %> 
            </li>
        <% } %>
    </ul>
`.trim()

// 标签模板
alert`123`
// 等同于
alert(123)
```


## 正则(RegExp)
```es6
// ...
```


## 函数(Function)
```es6
// rest参数
function add(...values) {
    let sum = 0
    for (let val of values) {
        sum += val
    }
    return sum
}

// 箭头函数
let f = v => v
// 等同于
let f = function(v) {
    return v
}

// 绑定this
foo::bar
// 等同于
bar.bind(foo)

foo::bar(...args)
// 等同于
bar.apply(foo, ...args)
```


## 数组(Array)
```es6
// 拓展运算符，
...[1, 2, 3, 4] // 1, 2, 3, 4
// 与Function的rest参数相同

// 适用于拆分字符串
[...'Hello']
// 等同于
Array.from('Hello')
// 等同于
'Hello'.split('')

Array.from('Hello', x => x + x)
// 等同于
Array.from('Hello').map(x => x + x)

let arr = {a: 1, b: 2, c: 3, d: 4}
// 需要配合for of
arr.keys() // [0, 1, 2, 3]
arr.values() // 报错 // ['a', 'b', 'c', 'd']
arr.entries() // {0: 'a', 1: 'b', 2: 'c', 3: 'd']
arr.next() // 循环下一次
```


## 对象(Object)
```es6
// 属性简写
let name = 'Super'
let Person = {
    name,
    say() {
        return 'Hello'
    },
    *dear() {
        yield 'baobao'
    }
}
// 等同于
let Person = {
    'name': name,
    'say': function() {
        return 'Hello'
    },
    'dear': funciton() {
        // ...
    }
}

// 1. 键名都会被设置成字符串(关键字无压力)
// 2. *号代表Generator函数

```


