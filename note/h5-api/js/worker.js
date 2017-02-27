onmessage = function (evt) {
    //通过evt.data获得发送来的数据
    var d = evt.data;

    //将获取到的数据发送会主线程
    postMessage(d);
};
