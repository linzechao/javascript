#### JavaScript Base
Return false: null、undefined、NaN、false、''、0


#### Number
> 1、typeof NaN === 'number';
>
> 2、|0 和 ~~ 都可以转成整数


#### URI
> 1、encodeURI：对ASCII的字母和数字不编码，对符号- _ . ! ~ * ' ( ) ; / ? : @ & = + $ , #也不编码
>
> 2、encodeURIComponent：对- _ . ! ~ * ' ( )不编码
>
> 3、escape：除@ * _ + - . 和 \ 之外，其它转至十六进制


#### String
> 1、match、replace、search接收的是正则，而非字符串(new Regexp('str'))
>
> 2、num.toString(2) -> parseInt(num, 2) // 对应进制
>
> 3、toFixed(2); // 保留小数点位数(四舍五入)
>
> 4、toExponential(2); // 科学表示法，10e+2(四舍五入)
>
> 5、match()与RegExp的exec()一致
>
> 6、'i\'m Super!'.replace(/(Super)/g, 'is $1 Chao?');
>
> 7、split('-', len);


#### toLocaleString()
``` js
var a1 = {
	toLocaleString: function () {
		return 'a1 locale';
	},
	toString: function () {
		return 'a1 string';
	}
},
a2 = {
	toLocaleString: function () {
		return 'a2 locale';
	},
	toString: function () {
		return 'a2 string';
	}
};
var arr = [a1, a2];
console.log(arr);
console.log(arr.toLocaleString());
console.log(arr.toString());
```


#### Array
> 1、迭代方法(IE9+)：every、filter、forEach、map、some
``` js
// every -> &&：全部返回true，则返回true，反之则反
// some -> ||：一个返回true，则返回true，反之则反
```
> 2、缩小方法(IE9+)：reduce、reduceRrigh // 求和、遍历所有
>
> 3、push、unshift返回长度，pop、shift、splice返回删除的元素


#### Date
> 1、new Date(string).valueOf() -> Date.parse(string) -> Date.now()(IE9+);
>
> 2、Date.UTC(2015, 8, 4, 12, 30, 20, 800); // 转成时间戳


#### RegExp
> 1、属性：global、ignoreCase、lastIndex、multline、source
>
> 2、方法：exec(返回数组)，有index、input属性
>
> 3、test：true或false
>
> 4、构造函数属性
``` js
RegExp.input === RegExp.$_ // 最近一次要匹配的字符串
RegExp.lastMatch === RegExp['$&'] // 最近一次匹配项
RegExp.lastParen === RegExp['$+'] // 最近一次匹配的捕获组
RegExp.leftContext === RegExp['$`'] // input字符串中lastMatch之前的文本
RegExp.multiline === RegExp['$*'] // 布尔值，是否所有表达式使用多行模式
RegExp.rightContext === RegExp["$'"] // input字符串中lastMatch之后的文本
```


#### Function
> 1、arguments.callee：当前函数(减少耦合性)
>
> 2、arguments.caller === this：当前调用函数的对象
>
> 3、length(参数个数)、prototype
``` js
function sum(n1, n2) {
	return n1 + n2 + this.n3;
}
function applySum(n1, n2) {
	this.n3 = 3;
	return sum.apply(this, arguments);
}
function callSum(n1, n2) {
	this.n3 = 30;
	return sum.call(this, n1, n2); // this->null也可以
}
console.log(applySum(1, 2));
console.log(callSum(10, 2));
```
> 4、this不指当前对象，指当前调用的对象
>
> 5、参数重新定义不需要使用var关键字


#### 单体内置对象
> 1、Global: evar()、URI、undefined...、window
>
> 2、Math：随机数 = Math.floor(Math.random() * 可能值的总数 + 第一个可能值);


#### 面向对象(特性)
> 1、[[Configurable]]：是否删除、重定义
>
> 2、[[Enumerable]]：是否可枚举
>
> 3、[[Writable]]：是否可以修改
>
> 4、[[Value]]：值
``` js
var me = {
	name: 'Super',
	age: 24	
};
// 修改特性
Object.defineProperty(me, 'name', function () {
	writable: false, // 以后不可写
	value: 'Chao' // 修改值
});
// 修改configurable: false;之后再使用defineProperty则报错
```
> 5、访问器属性
``` js
Object.defineProperty(me, 'age', function () {
	get: function () {
		return this.age;
	},
	set: function (age) { // 赋值的时候处理的一系列操作
		this.age = age;
	}
});
// 定义多个属性
Object.defineProperties(me, {
	name: {...},
	age: {...}
});
// 获取特性属性
Object.getOwnPropertyDescriptor(me, 'name');
```


#### 设计模式
> 1、工程模式
``` js
// 缺点：没有继承关系
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.seyName = function () {
		console.log('My name is ' + this.name);
	};
	return o;
}
var p1 = createPerson('Super', 24, 'FE');
var p2 = createPerson('Chao', 20, 'Student');
```
> 2、构造函数模式
``` js
// 缺点：重复创建公共函数
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.seyName = function () {
		console.log('My name is ' + this.name);
	};
}
var p1 = new Person('Super', 24, 'FE');
var p2 = new Person('Chao', 20, 'Student');
p1.constructor === Person;
p2.constructor === Person;
```

> 3、原型模式
``` js
// 缺点：无私共享，但有属性为引用类型时就导致所有后代中该值的变换
function Person () {}
Person.prototype.name = 'Super';
Person.prototype.age = 24;
Person.prototype.job = 'FE';
Person.prototype.sayName = function () {
	console.log('My name is ' + this.name);
};
var p1 = new Person();
// p1与构造函数Person没有直接关系
// Person.prototye.constructor = Person;
// p1.constructor === Person;
// => Person.prototype != p1;
// Person.prototype === Object.getPrototypeOf(p1);
// Person.prototype.isPrototypeof(p1); // true
// hasOwnProperty(); 判断是否为自身属性
```

> 4、可枚举属性
``` js
var keys = Object.keys(Person.prototype);
var keys = Object.keys(p1);
```

> 5、所有属性
``` js
var attrs = Object.getOwnPropertyNames(Person.prototype);
var attrs = Object.getOwnPropertyNames(p1);
```
> 6、使用覆盖/重写的原型模式
``` js
// 缺点：破坏[[prototype]]指针
// Person.prototype = {};
// constructor不再指向Person，而是Object
// 或者在属性中添加constructor: Person;
// 或者以下
Object.defineProperty(Person.prototype, 'constructor', {
	value: Person,
	enumerable: false
});
```
> 7、结合构造函数模式与原型模式
``` js
// 常用，公认
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.books = ['node.js', 'javascript'];
}
Person.prototype = {
	constuctor: Person,
	seyName: function () {
		console.log('My name is ' + this.name);
	}
};
```
> 8、动态原型模式
``` js
// 完美，动态生成必要的属性
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.books = ['node.js', 'javascript'];
	if (typeof this.sayName !== 'function') {
		Person.prototype.sayName = function () {
			console.log('My name is ' + this.name);
		};
	}
}
```
> 9、寄生构造函数模式
``` js
// 与工厂模式一模一样，但使用new创建对象
// 缺点也是一点继承关系都没有
function Person(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.seyName = function () {
		console.log('My name is ' + this.name);
	};
	return o;
}
var p1 = new Person('Super', 24, 'FE');
```
> 10、稳妥构造函数模式
``` js
// 与寄生构造函数模式类似
// 不使用this、new
function Person(name, age, job) {
	var o = new Object();
	o.seyName = function () {
		console.log('My name is ' + name);
	};
	return o;
}
var p1 = Person('Super', 24, 'FE');
```


#### 继承
> 1、原型链
``` js
var SuperType = function () {};
var SubType = function () {};
SubType.prototype = new SuperType();
var s = new SubType();
// s具有SubType和SuperType所有prototype上的属性与方法
// subType的prototype被重写所以需要把s的constructor指向SubType
// 当父级有引用类型时，又出问题了。
```
> 2、借用构造函数
``` js
// 伪造对象或经典继承
// 无法访问到超类属性方法，复用性差
var SuperType = function () {
	this.colors = ['red', 'green', 'blue'];
};
var SubType = function () {
	SuperType.call(this);
};
var sub = new SubType();
```
> 3、结合继承
``` js
// 伪经典继承，常用
// 以上2种结合
// 缺点：调用2次超类构造函数
function SuperType (name) {
	this.name = name;
	this.colors = ['red', 'green', 'blue'];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
};
function SubType (name, age) {
	SuperType.call(this, name);
	this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
	console.log(this.age);	
};
var sub = new SubType('Super', 24);
```
> 4、原型式继承
``` js
// 相当于Object.create();
function object (o) {
	function F () {};
	F.prototype = o;
	return new F();
}
// 纯共享，对引用类型无解
```
> 5、寄生式继承
``` js
// 类似于原型式、寄生构造函数与工厂模式
function createAnother (original) {
	var clone = object(original);
	clone.sayHi = function () {
		console.log('Hello!');
	};
	return clone;
}
```
> 6、寄生组合式继承
```js
// 解决组合式继承的2次调用超类函数
// 处理引用类型最合适
function inheritPrototype (subType, superType) {
	var prototype = object(superType.prototype);
	prototype.constructor = subType;
	subType.prototype = prototype;
}
```
