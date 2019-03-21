function Cookie() {}

/**
 * 设置cookie
 * @author linzechao
 * @param {string} key cookie名字
 * @param {string} value cookie值
 * @param {int} day 以‘天’为单位, 默认1天
 * @return {void}
 */
Cookie.prototype.setCookie = function(key, value, day) {
    var objDate = new Date();
    if (!day) {
        day = 1;
    }
    objDate.setDate(objDate.getDate() + day);
    document.cookie = key + '=' + value + '; expires=' + objDate;
};

/**
 * 获取cookie
 * @author linzechao
 * @param {string} key 查找指定key的cookie
 * @return {string} 返回指定cookie的值
 */
Cookie.prototype.getCookie = function(key) {
    var arrCookies = document.cookie.split('; ');
    for (var ac in arrCookies) {
        if (arrCookies[ac].split('=')[0] === key) {
            return arrCookies[ac].split('=')[1];
        }
    }
    return '';
};

/**
 * 删除cookie
 * @author linzechao
 * @param {string} 删除指定key的cookie
 * @return {void}
 */
Cookie.prototype.removeCookie = function(key) {
    this.setCookie(key, 0, -1);
};