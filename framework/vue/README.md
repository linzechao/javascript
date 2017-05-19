#VUE STUDY


## 计算属性 vs 方法
> computed: 缓存
>
> methods: 不缓存
>
> watch: 处理动态数据最佳(中间状态)，而computed(计算属性)：无法处理ajax等动态数据(中间状态)


## *v-if* vs *v-show*
> show没有else方法，不适用于template


## 循环数组时可以使用 *of* 替换 *in* 分隔符


## 通过索引修改某个值、修改数组长度都不会引起数据绑定机制
> vm.items[index] = newVal // 可以使用Vue.set(vm.items, index, newVal)
>
> vm.items.length = newLen // 可以使用vm.items.splice(newLen)


## 字面量语法 vs 动态语法
> <comp some-prop="1"></comp> // 传递的是字符串
>
> <comp :some-prop="1"></comp> // 传递的是数字


## 默认prop是单向绑定，父传子、子不能破坏父的数据
> 1.定义一个局部变量，并用 prop 的值初始化它
```js
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
```
> 2.定义一个计算属性，处理 prop 的值并返回
```js
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```


## 父传子用props属性、子传父用$events自定义事件


