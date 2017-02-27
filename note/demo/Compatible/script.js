/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-11-11
 * Time: 上午9:05
 * To change this template use File | Settings | File Templates.
 *
 * js main File
 *
 */

window.onload = load;
function load() {
    var btn = Ele.getCls('btn')[0],
        btn_box = Ele.getCls('btn-box')[0],
        btn2 = Ele.getId('btn'),
        btn_box2 = Ele.getId('btn_box');
    Ev.addEv(btn, 'click', function(e) {
        e = Ev.getEv(e);
        Ev.stopPropagation(e);
        Ev.preventDefault(e);
        var nodeN = Ev.getTarget(e).nodeName.toLowerCase();
        alert('<' + nodeN + '><\/' + nodeN + '>');
    });
    Ev.addEv(btn_box, 'click', function(e) {
        e = Ev.getEv(e);
        var nodeN = Ev.getTarget(e).nodeName.toLowerCase();
        alert('<' + nodeN + '><\/' + nodeN + '>');
    });
    Ev.addEv(btn2, 'click', function(e) {
        Ev.preventDefault(e);
    });
    Ev.addEv(btn2, 'dblclick', function(e) {// 双击
        e = Ev.getEv(e);
        Ev.stopPropagation(e);
        Ev.preventDefault(e);
        var nodeN = Ev.getTarget(e).nodeName.toLowerCase();
        alert('<' + nodeN + '><\/' + nodeN + '>');
    });
    // 获取DOM对象
    var drag = Ele.getId('drag');
    var title = drag.getElementsByTagName('h1')[0];

    Ev.addEv(title, 'mousedown', fun_down);

    function fun_down(e) {
        e = Ev.getEv(e);
        var disX = e.clientX - drag.offsetLeft - 100,
            disY = e.clientY - drag.offsetTop - 100;
        document.onmousemove = function(e) {
            e = Ev.getEv(e);
            fun_move(e, disX, disY);
        }
        document.onmouseup= function(e) {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    function fun_move(e, posX, posY) {
        var l = e.clientX - posX,
            t = e.clientY - posY,
            winW = document.documentElement.clientWidth || document.body.clientWidth,
            winH = document.documentElement.clientHeight || document.body.clientHeight,
            maxW = winW - drag.offsetWidth,
            maxH = winH - drag.offsetHeight;
        if (l <= 110) {
            l = 110 + 'px';
        } else if (l >= maxW + 90) {
            l = maxW + 90 + 'px';
        }
        if (t <= 110) {
            t = 110 + 'px';
        } else if (t >= maxH + 90) {
            t = maxH + 90 + 'px';
        }
        drag.style.left = l + 'px';
        drag.style.top = t + 'px';
    }
}