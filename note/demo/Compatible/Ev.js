/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-11-11
 * Time: 上午8:52
 * To change this template use File | Settings | File Templates.
 *
 * 事件类
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
}
