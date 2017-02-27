$doEle: document.documentElement;
$body: document.body


# 鼠标滚动
火狐: $doEle.scrollTop
谷歌: $body.scrollTop
解决：scrollTop = $doEle.scrollTop || $body.scrollTop,


# 图片报错
火狐：空src不会触发img的onerror、可在src后加上#号即可


# 浏览器高度
火狐：$doEle.clientHeight
谷歌：window.innerHeight
解决：bodyHeight = $doEle ? $doEle.clientHeight : window.innerHeight;


# 模板
IE：不支持template里面放td
解决：直接使用script type="text/template"


# 表单
所有异步的Form都需要加上action="javascript:;"属性值
IE8-：不支持jquery-validate
解决：去除validate的submitHandler方法，已以下方案代替
$form.on('submit', function() {
    if ($form.valid()) {
        options.submitHandler();
    }
    return false;
});


# 样式
火狐：不支持background-positionX属性
解决：使用background-position去分割


# 下拉菜单
select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance:none;

    /* 清除ie9+下拉箭头 */
    &::-ms-expand {display: none;}
}


# 计时器
一定要关闭，不管什么情况，跳转页面也清(提防网络延迟、或其他报错)


# CSS3选择器
IE8-：不支持last-child，使用frist-child代替
IE8-：不支持nth-child(n)，可用className代替
IE8-：不支持“: initial”值，可用auto代替


# JavaScript
IE8-：JSON不支持关键字当键(key)、可用['class']、或换关键字(cls)
