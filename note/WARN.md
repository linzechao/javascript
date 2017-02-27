#### Warn
> 1、WebKit的console.log异步，Node的console.log同步
>
> 2、apply、call传递引用this
>
> 3、var a = b = 0; // b为全局变量
>
> 4、eval(/未知/)的替换方案new RegExp()
>
> 5、块级注释/* var RegExp = /a*/; */
>
> 6、'use strict'; // 严格模式
>
> 7、typeof a; // 'undefined'
>
> 8、valueOf() -> toString() -> Error('message')
>
> 9、parseInt('010'); // ES3默认8进制、ES5默认10进制，加上第二个参数
>
> 10、switch使用的是全等模式
>
> 11、原始类型使用typeof、引用类型使用instanceof
>
> 12、new Date(); // 引用类型，Date(); // 原始类型、不适用与Object
>
> 13、基本类型包装类：String()、Number()、Boolean()
>
> 14、闭包是执行一个函数，返回另一个函数执行后返回的值
``` js
function fun() {
	var result = [],
		i = 0, len = 10;
	for (; i < len; i++) {
		result[i] = function (num) {
			return num;
		}(i);
	}
	return result;
}
```


#### BOM
> 1、location.href === location.assign();
>
> 2、location.replace(); // 不会生成历史记录
>
> 3、location.reload(true); // true时从服务器重载


#### DOM
> 1、doctype === document.doctype; // <!DOCTYPE html>
>
> 2、html === document.documentElement;
>
> 3、body === document.body;
>
> 4、title === document.title; // URL、domain、referrer
>
> 5、document.anchors === <a name="hash">hash</a>
>
> 6、forms === <form></form>
>
> 7、images === <img>
>
> 8、links === <a href="link">link</a>
>
> 9、IE中操作script和style标签时，需要用特性处理，try、catch、text、cssText


#### 拓展DOM
> 1、Level1选择器：querySelector(); // 返回第一个元素、querySelectorAll(); // NodeList
>
> 2、Level2选择器：matchSelector()(IE9+); // 存在返回true，不存在返回false。[ms、moz、webkit]各自实现
>
> 3、childElemetCount：返回子元素数量，不包括注释，文本
>
> 4、firstElementChild、lastElementChild、previousElementSibling、nextElementSibling; // 都不包括注释和文本


#### HTML5
> 1、getElementsByClassName()
>
> 2、classList代替className，返回DOMTokenList
``` js
add(value); // 添加
contains(value); // 判断
remove(value); // 删除
toggle(value); // 有则删，无则添
// 焦点管理
document.activeElement; 获取当前获得焦点的对象，focus();
// 加载状态
document.readyState === 'loading' || 'complete'; 正在与完毕
// 渲染模式
document.compatMode === 'CSS1Compat';
// 字符集
document.charset is document.defaultCharset
// 自定义
// data-title="嗨喽"
dom.dataset.title = '嗨喽';
```
> 3、新建节点
``` js
dom.innerHTML = 'Hello';
dom.outerHTML = '<p>Hello</p>';
// 插入节点
dom.insertAdjacentHTML('xx', '<p>Hello</p>');
// xx -> 同辈：beforebegin、afterend; 子代：beforeend、afterbegin;
```
> 4、滚动页面
``` js
scrollIntoView(); // 是调用的对象与屏幕对齐
```
> 5、专用拓展
``` js
children; // 属性、返回子代
contains(); // 只是包含 
// 插入文本
innerText || textContent
outerText; // 替换掉节点
// 滚动
scrollIntoViewIfNeeded(); // 与屏幕对齐
scrollByLines(4); // 向下滚动4行
scrollByPages(-1); // 回滚1页 
```


#### DOM2、DOM3
> 1、D2、D3
``` js
// 使用style来获取样式
style.color = 'red';
// 特殊float保留字
cssFloat || styleFloat;
// 偏移量(只读)
offsetHeight、offsetWidth(包括边框)、offsetLeft、offsetTop
// 客户区(只读、不包括边框)
clientWidth、clientHeight
// 滚动
scrollHeight、scrollWidth; // 滚动剩下的部分
scrollLeft、ScrollTop; // 滚动隐藏的部分
```
> 2、获取节点
``` js
parentNode()、firstChild()、lastChild()、nextSiblind()、previousSiblind()
```


#### Event
> 1、DOM0：onclick = function () {}; // = null;可删除
>
> 2、DOM2：
``` js
addEventListenter('click', function () {}); // 可重复监听
// 使用removeEnentistener('click', name, false); 但匿名函数不可删
IE：attachEvent/detachEvent;
attachEvent('onclick', name);
// 可重复监听，但执行顺序相反
```
> 3、事件对象，使用target，而避免currentTarget
``` js
IE中：
window.event.srcElement === target
window.event.cancelBubble = true === stroPropagation(); // 事件冒泡
window.event.returnValue = true === preventDefault(); // 取消默认操作
```


#### JSON
> 1、JSON.stringify(json, ['name', 'age']);
>
> 2、JSON.stringify(json, [], 4); // 4个空格缩进
>
> 3、JSON.stringify(json, [], '--'); // 缩进用字符代替


#### Ajax
> 1、IE：ActiveXObject
>
> 2、XMLHttpRequest


#### 面向对象
> 1、使用object、{}来创建对象
>
> 2、使用构造函数来创建对象，使用new
``` js
// 好处，可以传参
```
> 3、函数有prototype、arguments属性，有call、apply方法，arguments有caller、callee属性



#### Number
> 1、MAX_VALUE、MIN_VALUE、POSITIVE_INFINITY、NEGATIVE_INFINITY、NaN
>
> 2、toFiexd()、toPrecision()、toExponential();
>
> 3、toString(2) => 转换成2进制
> 
> 4、parseInt(2, 2) => 2进制转换成10进制


#### String
> 1、slice、substring参数都是一个区间，区别在第二个参数为负数，substring时为0，而slice为倒数算起
