/**
 * 获取元素
 */
var doc = document;
var Ele = {
    getCls : function(clsN, parent) {
        var o_par = parent ? doc.getElementById(parent) : doc,
        clsEle = [],
            allEle = o_par.getElementsByTagName('*');
        for(var i = 0, l = allEle.length; i < l; i ++) {
            if (allEle[i].className == clsN) {
                clsEle.push(allEle[i]);
            }
        }
        return clsEle;
    },
    getId : function(idN, parent) {
        return parent ? doc.getElementById(parent).getElementById(idN) : doc.getElementById(idN);
    },
    getTag : function(tagN, parent) {
        return parent ? doc.getElementById(parent).getElementsByTagName(tagN) : doc.getElementsByTagName(tagN);
    },
    getChild : function(ele) {
        function FunDelSpace(elem) { //过滤空格的函数
            var elemChild = elem.childNodes; //获取所有子元素
            for(var i = 0; i < elemChild.length; i++) {
                //如果是文本节点，并且内容只包含空格则删除该节点
                if(elemChild[i].nodeName == "#text" && ! /\S/.test(elemChild[i].nodeValue)) {
                    elem.removeChild(elemChild[i]);//如果该元素为空格则删除
                }
            }
        }
        FunDelSpace(ele);
        return ele.childNodes;
    }
};

/**
 * 事件
 */
var Ev = {
    addEv : function(ele, type, fun) {
        if (ele.addEventListener) {
            ele.addEventListener(type, fun, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, fun);
        } else {
            ele['on' + type] = fun;
        }
    },
    reEv : function(ele, type, fun) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, fun);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, fun);
        } else {
            ele['on' + type] = null;
        }
    },
    getEv : function(e) {
        return e || window.event;
    },
    getType : function(e) {
        return e.type;
    },
    getTarget : function(e) {
        return e.target || e.srcElement;
    },
    stopPropagation : function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    preventDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
};

/**
 * css样式
 */
var Css = {
    getCss : function(ele, css) {
        if (ele.currentStyle) {
            return ele.currentStyle[css];
        } else {
            return window.getComputedStyle(ele, null).getPropertyValue(css.replace(/([A-Z])/g, '-$1'));
        }
    }
};