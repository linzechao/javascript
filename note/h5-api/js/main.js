$(function () {
    var $aside = $('aside'),
        $btnAsideClose = $aside.find('.btn-close'),
        $form = $('form');
    $('.btn-aside').click('click', function () {
        $aside.toggleClass('aside-show');
    });
    $btnAsideClose.on('click', function () {
        $aside.removeClass('aside-show');
    });



    // ================================webWorker================================
    //创建一个Worker对象并向它传递将在新线程中执行的脚本的URL
    var worker = new Worker('js/worker.js');
    // console.log(worker);



    // ================================webSocket================================
    /*var url = 'ws://sc:4004/socket',
        ws = new WebSocket(url);

    // 打开
    ws.onopen = function () {
        console.log('open');
    };

    // 接收数据
    ws.onmessage = function (event) {
        console.log(event);
    };

    // 关闭
    ws.onclose = function () {
        console.log('close');
    };

    ws.onerror = function (error) {
        console.log('error', error);
    };*/
    
    // 表单提交
    $form.on('submit', function () {
        var data = $form.serialize();
        window.frames[0].postMessage('Hi, son.', '*');
        return false;
    });


    // ================================本地存储================================
    /*// 除非清除浏览器缓存，不然永久保存
    console.info('localStorage -> ' + localStorage.getItem('name'));
    localStorage.setItem('name', 'local Super');

    // 浏览器关闭及时消失
    console.info('sessionStorage -> ' + sessionStorage.getItem('name'));
    sessionStorage.setItem('name', 'session Super');*/



    // ================================IndexedDB================================
    // 更类似mongodb的数据库SO COOL.
    /*function openDB (handle, callback) {
        var request = indexedDB.open(handle.name, handle.version);
        // 创建失败
        request.onerror = function (error) {
            console.log('open error -> ', error);
        };
        // 创建成功
        request.onsuccess = function (event) {
            handle.db = event.target.result;
            callback(handle);
        };
        // 完成后回调方法
        request.onupgradeneeded = function (event) {
            // 不执行??
            var db = event.target.result;
            if (!db.objectStoreNames.contains('student')) {
                db.createObjectStore('student', {keyPath: 'id'});
            }
        };
    }

    var myDB = {
        name: 'student',
        // 只能为大于0的整数，而且定义之后后面不能访问低版本
        version: 888888
    };

    var students = [{
        id: 1001,
        name: "Byron",
        age: 24
    }, {
        id: 1002,
        name: "Frank",
        age: 30
    }, {
        id: 1003,
        name: "Aaron",
        age: 26
    }];


    // 异步API，使用回调方法
    openDB(myDB, function (myDB) {
        //console.log(db);
        var db = myDB.db;

        // 创建
        if (!db.objectStoreNames.contains('student')) {
            db.createObjectStore('student', {keyPath: 'id'});
        }

        //打开一个事务，使用student 和teacher object store
        var transaction = db.transaction('student', 'readwrite');
        //获取student object store
        var objectStore = transaction.objectStore('student');

        students.forEach(function (element) {
            objectStore.add(element);
        });

        // 关闭数据库
        db.close();
        // 删除数据库
        indexedDB.deleteDatabase(db);
    });*/


    // ================================已经废弃================================
    // website sql database
    /**var db = openDatabase('student', '0.1.2', '学生表', 1024 * 1024, function () {console.log('成功创建数据库!')});

    // 创建数据表
    db.transaction( function(tab) { 
        tab.executeSql("create table if not exists student (id REAL UNIQUE, name TEXT)", [], function (tab, result) {
            console.log('创建表成功 -> ', result);
        }, function(tab, error){
            console.log('创建表失败 -> ', error);
        });
    });

    // 加入数据
    db.transaction(function (tab) {
        tab.executeSql("insert into student (id, name) values(?, ?)", [3, 'Chao'], function (tab, result) {
            console.log('添加数据成功 -> ', {show: 'cool'});
        }, function (tab, error) {
            console.log('添加数据失败 -> ', error); 
        });
    });

    
    executeSql('select * from student') // 查询数据
    executeSql('update stu set name = ? where id= ?', [name, id]) // 更新数据
    executeSql('delete from stu where id= ?', [id]) // 删除数据
    executeSql('drop table student') // 删除表
    */




    // canvas
    var canvas = $('canvas')[0],
        img = $('.superman')[0],
        ctx = canvas.getContext('2d');
        
    canvas.width = 200;
    canvas.height = 151;
    ctx.drawImage(img, 0, 0, 200, 151);

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 8;
    ctx.moveTo(35, 0);
    ctx.lineTo(160, 0);
    ctx.lineTo(195, 36);
    ctx.lineTo(100, 145);
    ctx.lineTo(5, 36);
    ctx.lineTo(41, 0);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#f5f5f5';
    ctx.lineWidth = 8;
    ctx.moveTo(41, 8);
    ctx.lineTo(162, 8);
    ctx.lineTo(189, 36);
    ctx.lineTo(100, 138);
    ctx.lineTo(12, 36);
    ctx.lineTo(41, 8);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.moveTo(42, 12);
    ctx.lineTo(160, 12);
    ctx.lineTo(184, 36);
    ctx.lineTo(100, 132);
    ctx.lineTo(16, 36);
    ctx.lineTo(42, 12);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#f5f5f5';
    ctx.globalAlpha = 1;
    ctx.moveTo(147, 12);
    ctx.lineTo(161, 12);
    ctx.lineTo(161, 37);
    ctx.lineTo(147, 37);
    ctx.lineTo(147, 12);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#f5f5f5';
    ctx.moveTo(132, 24);
    ctx.lineTo(147, 24);
    ctx.lineTo(147, 37);
    ctx.lineTo(132, 37);
    ctx.lineTo(132, 24);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#f5f5f5';
    ctx.moveTo(147, 12);
    ctx.lineTo(147, 24);
    ctx.lineTo(142, 24);
    ctx.bezierCurveTo(142, 24, 148, 20, 147, 12);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#f5f5f5';
    ctx.moveTo(100, 12);
    ctx.lineTo(131, 12);
    ctx.bezierCurveTo(131, 12, 140, 20, 140, 24);
    ctx.lineTo(140, 24);
    ctx.lineTo(132, 37);
    ctx.bezierCurveTo(132, 35, 132, 28, 124, 21);
    ctx.bezierCurveTo(124, 21, 120, 15, 100, 12);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#f5f5f5';
    ctx.moveTo(59, 12);
    ctx.lineTo(100, 12);
    ctx.bezierCurveTo(100, 12, 60, 12, 60, 30);
    ctx.bezierCurveTo(60, 30, 60, 48, 100, 45);
    ctx.bezierCurveTo(100, 45, 150, 40, 160, 65);
    ctx.lineTo(127, 102);
    ctx.bezierCurveTo(126, 102, 100, 106, 73, 102);
    ctx.lineTo(60, 88);
    ctx.bezierCurveTo(62, 90, 62, 80, 75, 80);
    ctx.bezierCurveTo(75, 80, 90, 80, 98, 93);
    ctx.bezierCurveTo(98, 93, 140, 90, 139, 82);
    ctx.bezierCurveTo(139, 82, 142, 72, 98, 72);
    ctx.bezierCurveTo(98, 72, 60, 72, 41, 66);
    ctx.lineTo(31, 54);
    ctx.bezierCurveTo(34, 55, 25, 30, 59, 12);
    ctx.closePath();
    ctx.fill();
});
