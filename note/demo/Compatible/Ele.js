/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-11-11
 * Time: 上午9:07
 * To change this template use File | Settings | File Templates.
 *
 * 元素类
 *
 */

var Ele = {
    /**
     * 功能：处理IE10版本前不兼容getElementsByClassName
     * cls为类名
     * parent为父节点id，可填可不填
     * @param clsN
     * @param parent
     */
    getCls : function(clsN, parent) {
        var o_par = parent ? document.getElementById(parent) : document
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
        return parent ?  document.getElementById(parent).getElementById(idN) : document.getElementById(idN);
    }
}
