#### ES6新特性
> 1、需要引进traceur.js文件、或使用node(0.11，不稳定版本)进行引入开发
>
> 2、打开实验选项
``` js
<script>
	traceur.options.experimental = true;
</script>
```
> 3、代码写入到type="module"的script中、或引入js


#### let
> 1、块级声明作用域，不会自动变量提升
>
> 2、可代替闭包


#### coust
> 1、常量，重新声明或赋值，不会报错，只能默默的失败
>
> 2、var、let声明过的值，重新coust定义，报错


#### 赋值(匹配模式)
> 1、var [a, b, c] = [1, 2, 3]
>
> 2、匹配不到的返回undefined
>
> 3、var [val] = undefined, unll都报错
>
> 4、var [foo = true] = []; foo -> true
>
> 5、var {foo, bar} = {foo: 'aaa', bar: 'bbb'}
