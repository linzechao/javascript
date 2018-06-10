## 块级作用域(let、const)
```es6
// 不再需要自执行方法(IIFE)
// 使用花括号与let关键字配合
{
    let prefect = '完美'
    console.info(prefect)
}

// do表达式
let x = {
    let y = 4;
    y -= 2;
}

// const
// 只声明，不赋值(否则报错)
```


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
arr.values() // 报错，直接遍历数组实例即可，['a', 'b', 'c', 'd']
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


## 队列(Set)、对象队列(WeakSet)、集合(Map、本质上是键值对的集合)、WeakMap(键为对象的集合)
#### Set
> 与数组(Array)区别：Set不会保存重复的值
```es6
// 去重
[...new Set([1, 2, 2, 3, 4, 4])] // [1, 2, 3, 4]
// 属性
set.size
// 方法
set.add(value)
set.delete(value)
set.has(value)
set.clear()
// 遍历(for of)，遍历的键名与值都是一致的
set.keys()
set.values()
set.entries()
set.forEach()

// ========
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```
#### WeakSet
```es6
// 与Set一样，但只能保存对象
// 不适合存放引用，weakSet有自己一套垃圾回收机制
// 不能遍历
// 主要用处：存储DOM节点
```
#### Map
```es6
// 键值无下限
// 属性
map.size
// 方法
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.has(key)
map.clear()
// 遍历(for of)，遍历的键名与值都是一致的
set.keys()
set.values()
set.entries()
set.forEach()
for (let [key, value] of map.entries()) {}
```
#### WeakMap
```es6
// 与Map一样，但键只能为对象
// 一样有自己的垃圾回收机制
// 也是适用于存储DOM节点
```


## 异步开发(Promise)
```es6
// 实例化，或创建
let promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('成功')
        return;
    }

    reject('失败')
})

// 监听、或接收
promise.then(
result => console.log('成功'),
failure => console.log('失败')
)

// 捕获异常
promise.catch(error => console.log(error))

// 确保一定捕获异常
promise.done();

// 不管成功失败一定执行
promise.finally()
```


#### 遍历器(Iterator、for...of)
```es6

```
