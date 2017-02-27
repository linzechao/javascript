#### 实用网站
> 1、[Gimhoy图床](http://pic.gimhoy.com/)
>
> 2、[比特虫图标](http://www.bitbug.net/)
>
> 3、[松鼠字体](http://www.fontsquirrel.com/home)
>
> 4、[熊猫图片](http://www.easyicon.net/)
>
> 5、[字体图标](https://icomoon.io/app/#/select)
>
> 6、[在线JS/CSS/HTML压缩](http://tool.oschina.net/jscompress)
>
> 7、[MarkDown工具](https://stackedit.io/editor)
>
> 8、[Yeoman](http://yeoman.io/)
>
> 9、[Bower](http://bower.io/)
>
> 10、[Grunt](http://www.gruntjs.net/)
>
> 11、[廖雪峰官网](http://www.liaoxuefeng.com/)
>
> 12、[前端规范](http://zhibimo.com/read/Ashu/front-end-style-guide/index.html)
>
> 13、[Require API](http://www.requirejs.cn/docs/download.html)
>
> 14、[Web Uploader](http://fex.baidu.com/webuploader/?qq-pf-to=pcqq.c2c)
>
> 15、[CSS3漂亮图形](http://jingyan.baidu.com/article/e52e36154226ef40c70c5148.html)
>
> 16、[Kindeditor富客户端](http://kindeditor.net/doc.php)
>
> 17、[外网ping](https://asm.ca.com/zh_cn/ping.php)


#### 2017-02-23
1. Webpack
    * CommonJS: 同步加载、Node、NPM(浏览器中代表Browserify，体积大)
    * AMD: 异步加载(适合浏览器端，如Require.js)
    * CMD: 依赖加载(如Sea.js)
    * ES6: 未普及标准
2. EcmaScript6
3. Vue



----
> **客户端:**
> 1. HTML，HTML5
> 2. CSS，CSS3
> 3. JavaScript，JQuery，Zepto，Bootstrap
> 4. Angular，Ionic，React

> **工具:**
> 1. Npm，Git
> 2. Yoeman，Bower，Grunt
> 3. Less，Sess，Compass
> 4. Sea，Require
> 5. PhoneGap

> **服务端:**
> 1. Node
> 2. PHP，ThinkPHP

> **类型：**
> 1. PC Web
> 2. Web App
> 3. Hybrid App


#### JavaScript
> 1、if、for、where等没有块级作用域


#### “==”符号类型转换
> 1、null == undefined
>
> 2、其中一个为number，则另一个转换成number，再比较
>
> 3、其中一个为boolean，则转成相应的number；true-> 1、false-> 0
>
> 4、其中一个为object，则调用toString()或valueOf()


#### Function
> 1、call使用第二个参数开始后的参数进行传参
>
> 2、apply使用第二个参数为数组，其元素为参数进行传参


#### Array
> 1、concat连接2个数组，返回一个新的数组
>
> 2、slice获取起始位置的元素
>
> 3、splice从哪里，删除几个，插入元素，以参数的形式
>
> 4、sort传入参数，分为正序与逆序


#### RegExp括号的作用(1~3)
> 1、h(elp)?：子表达式隔离
>
> 2、/(\w)(\d)/.exec('su46')[0] === 'su'：分组
>
> 3、/(['"][^'"])\1/，\1与第一个括号的字符一致(对称)：辅助作用(引用)
>
> 4、i: 不区分大小写，g: 全文查找，m: 多行查找(\n)
>
> 5、compile??


#### String中的正则
> 1、str.match(/.*/)：查找到的元素组成数组
>
> 2、str.replace(/.*/, '$1, $2')：替换查找到的元素
>
> 3、str.split(/.*/)：分隔后组成数组
>
> 4、str.search：查找，返回首次发现的位置，酷似indexOf()


#### 闭包、柯里化
> 1、函数初始化阶段，不执行，值无法实时被记录
>
> 2、闭包中不包含this关键字
>
> 3、弊端：内存泄露
>
> 4、OO(面向对象)：基于原型prototype
>
> 5、高阶函数：以1个或以上的函数当做参数的函数(map、filter)
>
> 6、柯里化：返回一个函数，但输入的参数被保存在闭包里
``` js
var adder = function(num) {
	return function(y) {
		return num + y;
	};
};
```
> 7、Y-结合子：arguments.callee(): 函数自身；arguments.caller函数调用者


#### 原型链
> 1、__proto__：Object.prototype
>
> 2、__proto__指向父类，prototype指向子类
>
> 3、3种上下文：全局、函数、eval
